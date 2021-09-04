import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from '../../../shared/base.service';
import { Ticket, PlacerType, TicketStatus } from '../../models/ticket';
import { Model } from 'mongoose';
import { TicketDTO } from 'src/core/DTOs/create/ticket.dto';
import { AppService } from 'src/app.service';
import { BetService } from '../bet/bet.service';
import { User, Role } from 'src/core/models';
import { UpdateTicketDTO } from 'src/core/DTOs/update/ticket.dto';
import { ShopService } from '../shop/shop.service';
import { UserService } from '../user/user.service';
import {FixtureService} from "../../../lsports/services/fixture.service";
import { MessageService } from '../message/message.service';
import { getMessage } from 'src/core/models/message';
import { OddService } from 'src/lsports/services/odd.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const moment = require('moment');
/**
 * Ticket [ savedID, placedId, isPlaced, stake, user[guest, admin, customer], bets, status]
 * status is true if only if all bets are completely got their own result
 * Bet [type, value, fixtureID, status[NOT_CHECKED, CORRECT, NOT_CORRECT]
 */
@Injectable()
export class TicketService extends BaseService<Ticket> {
  constructor(
    @InjectModel(Ticket.name) private TicketModel: Model<Ticket>,
    private appService: AppService,
    private betService: BetService,
    private shopService: ShopService,
    private userServie: UserService,
    private fixtureService: FixtureService,
    private messageService: MessageService,
    private oddService: OddService
  ) {
    super();
    this._model = this.TicketModel;
    //this.getReport().then((response) => console.log(JSON.stringify(response)));
   // console.log( moment().subtract(24, "hours").toDate());
  }
  async deleteOldTickets() {
    let ids = await this.TicketModel.aggregate(
        [
          {
            $match: {
              isPlaced: false,
              createdAt: {$gte: moment().subtract(24, "hours").toDate()}
            }
          }
        ]
    ).exec();
    ids = ids.map((d) => d._id);
    console.log(ids);
    return  this.TicketModel.deleteMany({_id: {$in: ids}});
  }
  async saveTicket(ticket: TicketDTO) {
    const newTicket = await this.create({
      stake: ticket.stake,
      vatValue: await this.appService.getVat(ticket.stake),
      totalOdds: this.totalOdds(ticket.bets),
      ticketID: await this.generateTicketId(),
    });
    const bets = ticket.bets.map((bet) => ({
      ...bet,
      ticketID: newTicket._id,
    }));
    await this.betService.createMany(bets);
    return newTicket;
  }
  // if all got
  async correctTicket(ticket, bets) {
    if (ticket.status === TicketStatus.PENDING && ticket.isPlaced) {
      if (bets) {
        const betStatusCorrected = bets
          .map((bet) => bet.status)
          .filter((status) => status);
        if (betStatusCorrected.length === bets.length) {
          // ticket status must change now
          // is the ticket placed by customer increment it to customers account balance
          const newStatus = {
            status:
              betStatusCorrected.filter(
                (status) => status === 2,
              ).length === betStatusCorrected.length
                ? TicketStatus.WIN
                : TicketStatus.LOSE,
          };
         
          const updatedTicket = await this.update(ticket._id, {...newStatus, resolvedDate: new Date().toString()});
          if(!updatedTicket){
            throw new HttpException('Unable to update ticket', HttpStatus.INTERNAL_SERVER_ERROR)
          }
          // if the user is customer add the value of winning to his account
          if(updatedTicket.status === TicketStatus.WIN){
            if(ticket.placerType === PlacerType.CUSTOMER) {
            
         
              const totalOdds = +(bets.reduce(
                (ac, cr) => ac * Number(cr.oddValue),
                1
              )).toFixed(2);

              const app = await this.appService.getApp()
              if(!app){
                throw new HttpException('App not found', HttpStatus.NOT_FOUND);
              }
              const userToUpdate = await this.userServie.findById(ticket.userID)
              if(!userToUpdate){
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
              }

              const est = +this.calculateTicketReturns(ticket?.stake, totalOdds,  app?.maxWin).possibleWin
              const updatedUser = await this.userServie.update(userToUpdate._id, {accountBalance: userToUpdate.accountBalance + est});
                if(!updatedUser){
                  throw new HttpException('Unable to update account', HttpStatus.NOT_FOUND);
               }
               
               const messageObject = getMessage('TICKET_WON', {placementId: ticket.placementID, estimatedWin: est})
                const messageToCreate = {
                      ...messageObject,
                      customerId: ticket.userID
                }
                await this.messageService.createMessage(messageToCreate)
              }
            }

        }
      }
    }
  }

   calculateTicketReturns (stake: number, totalOdds: number, maxWin: number)  {
    const roundedTotalOdds = +totalOdds.toFixed(2);
    const stakeAfterVat = +(stake / 1.15).toFixed(2);
    const vatOnStake = +(stake - stakeAfterVat).toFixed(2);
    let possibleWin = +(stakeAfterVat * totalOdds).toFixed(2);
  
    if (possibleWin > maxWin) {
      possibleWin = maxWin;
    }

    let incomeTax = 0;
    if (possibleWin > 1000) {
      incomeTax = +(possibleWin * 0.15).toFixed(2);
      possibleWin = +(possibleWin - incomeTax).toFixed(2);
    }
  
    return {
      stakeAfterVat,
      vatOnStake,
      possibleWin,
      incomeTax,
      roundedTotalOdds,
    };
  };

  // online user mostly
  // also used by cashiers to duplicate ticket
  async placeTicket(ticket: TicketDTO, user: User) {
    if (!this.ableToBet(user, ticket.stake) && user.role !== Role.CASHIER) {
      throw new HttpException(
        "You Can't Place Ticket, please make sure you've verified your account and have suffiecient balance",
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    if(!(await this.checkBetsForValidity(ticket.bets))) {
      throw new HttpException(
          "You Can't Place Ticket, Bets is not Valid",
          HttpStatus.NOT_ACCEPTABLE,
      );
    }
    // check if all fixtures are valid to be placed
    const ticketToBeCreated = {
      stake: ticket.stake,
      vatValue: await this.appService.getVat(ticket.stake),
      totalOdds: this.totalOdds(ticket.bets),
      ticketID: await this.generateTicketId(),
      userID: user._id,
      isPlaced: true,
      placerType:
        user.role === Role.CUSTOMER ? PlacerType.CUSTOMER : PlacerType.CASHIER,
      placementID: await this.generateTicketPlacementId(),
      placedDate: new Date().toString()
    }
    if(ticketToBeCreated.placerType === PlacerType.CASHIER){
      ticketToBeCreated["shopID"] = user.belongsToShop
    }
    const newTicket = await this.create(ticketToBeCreated);
    const bets = ticket.bets.map((bet) => ({
      ...bet,
      ticketID: newTicket._id,
      isPlaced: true,
    }));
    await this.betService.createMany(bets);
    //deduct amount
    if(newTicket.placerType === PlacerType.CUSTOMER){
      const cB = user.accountBalance - ticket.stake;
      await this.userServie.updateBalance(user._id, cB);
    }
    return newTicket;
  }

  async duplicateTicket(id: string, stake: number, user: User): Promise<Ticket>  {
    const ticketBets = await this.betService.findAll({ticketID: id})
    console.log(ticketBets)
    if(!ticketBets){
      throw new HttpException('Tickets bets not found', HttpStatus.NOT_FOUND)
    }
    const newBets = await Promise.all(ticketBets.map(async (bet) => {
      const newBet = await this.oddService.getCurrentBet(bet)
      return newBet
    }))

    const ticketToCreate = {stake, bets: [...newBets]}
    const newTicket = await this.placeTicket(ticketToCreate, user)
    return newTicket
  }

  async payWonTicket(id: string, user: User): Promise<Ticket>{
    if(user.role !== Role.CASHIER){
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
    }
    const ticketToPay = await this.findById(id)
    if(!ticketToPay){
      throw new HttpException('Ticket not found', HttpStatus.NOT_FOUND)
    }
    if(ticketToPay.paidDate){
      throw new HttpException('Ticket already paid', HttpStatus.BAD_REQUEST)
    }
    if(ticketToPay.status !== TicketStatus.WIN){
      throw new HttpException('Only won tickets can be paid', HttpStatus.BAD_REQUEST)
    }
    const paidTicket = await this.update(id, {paidDate: new Date().toString(), payerID: user._id})
    return paidTicket
  }



  async checkBetsForValidity(bets): Promise<boolean> {
    // let result = true;
    // if(!bets) return;
    // for(const bet of bets) {

    // }
    // return new Promise((resolve, reject) => {
    //   bets.forEach((bet) => {
    //     this.fixtureService.findOne({id: bet.fixtureId}).then((fixture) => {
    //       console.log(`start date: ${new Date(fixture.startDate).getTime()},  ${new Date(fixture.startDate)} | current date: ${new Date().getTime()} ${new Date()} | difference: ${(new Date(fixture.startDate).getTime() - new Date().getTime())}`);
    //       if(((new Date(fixture.startDate).getTime() - new Date().getTime()) < 0)){
    //         resolve(false);
    //       }
    //     }).catch((err) => {
    //       reject(err);
    //     })
    //   });


    //   resolve(true);
    // });
    // const t = await Promise.all(
    //   bets.map(async (bet) => {
    //     const fixture = await this.fixtureService.findOne({id: bet.fixtureId});
    //     return ((new Date(fixture.startDate).getTime() - new Date().getTime()) > 0);
    //   })
    // );
    return true
  }

  async updateTicket(id: string, ticket: UpdateTicketDTO, user: User) {
    //update can be made only once and by cashier
    if (user.role !== Role.CASHIER) {
      throw new HttpException(
        "You don't have a persmission",
        HttpStatus.UNAUTHORIZED,
      );
    }
    const oldTicket = await this.findById(id);
    if (oldTicket.isExpired) {
      throw new HttpException('Ticket has expired!', HttpStatus.FORBIDDEN);
    }

    if (oldTicket.isPlaced) {
      throw new HttpException(
        'Ticket has already been placed',
        HttpStatus.FORBIDDEN,
      );
    }

    const shop = await this.shopService.findById(user.belongsToShop); //shop by user id.

    if(!shop){
      throw new HttpException(
        "Cashier's shop not found",
        HttpStatus.NOT_FOUND,
      );
    }

    const bets = await this.betService.findAll({ticketID: id});
    const isTicketPlaceable = await this.checkBetsForValidity(bets);
    console.log(isTicketPlaceable);
    if(!(isTicketPlaceable)) {
      throw new HttpException(
          "You Can't Place Ticket, Bets is not Valid",
          HttpStatus.NOT_ACCEPTABLE,
      );
    }
    // is the ticket expired?
    const t = {
      isPlaced: ticket.isPlaced,
      placementID: await this.generateTicketPlacementId(),
      placerType: PlacerType.CASHIER,
      userID: user._id,
      stake: ticket.stake ? ticket.stake : oldTicket.stake,
      shopID: shop._id,
      placedDate: new Date().toString()
    };
    const newTicket = await this.update(id, t);
    await this.betService.updateMany(
      { ticketID: newTicket._id },
      { isPlaced: true },
    );
    return newTicket;
  }

  ableToBet(user: User, stake: number): boolean {
    //return user.accountBalance >= stake && user.isVerified && !user.isLocked;
    return user.accountBalance >= stake && !user.isLocked;
  }

  async generateTicketPlacementId(): Promise<string> {
    const id = `${this.randomChar()}${this.randomSixDigitNumber()}`;
    const ticket = await this.findOne({ placementID: id });
    return ticket ? this.generateTicketPlacementId() : id;
  }
  async generateTicketId(): Promise<string> {
    const id = `${this.randomChar()}${this.randomSixDigitNumber()}`;
    const ticket = await this.findOne({ ticketId: id });
    return ticket ? this.generateTicketId() : id;
  }

  randomChar() {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(Math.floor(Math.random() * 26));
  }
  randomSixDigitNumber() {
    const minm = 100000;
    const maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  }

  totalOdds(bets) {
    return +(bets.map((bet) => bet.oddValue).reduce((pv, cv) => {return pv * cv}, 1)).toFixed(2);
  }

  async getReport(args) {
    // ticket should placed,
    // ticket status should be set
    // date range [monthly]
    const filter =
      args.from && args.to
        ? {
            $match: {
              isPlaced: true,
              status: { $ne: 'PENDING' },
              createdAt: { $gte: new Date(args.from), $lte: new Date(args.to) },
            },
          }
        : {
            $match: { isPlaced: true, status: { $ne: 'PENDING' } },
          };
    return this.TicketModel.aggregate([
      filter,
      {
        $group: {
          _id: {
            date: {$dateToString: {format: '%d-%m-%Y', date: '$createdAt'}},
          },
          noPlayed: {$sum: 1},
          playedMoney: {$sum: '$stake'},
          noWinners: {
            $sum: {
              $cond: {
                if: {$eq: ['$status', 'WIN']},
                then: 1,
                else: 0,
              },
            },
          },
          wonMoney: {
            $sum: {
              $cond: {
                if: {$eq: ['$status', 'WIN']},
                then: {$multiply: [({$substract: ['$stake', '$vatValue']}), '$totalOdds']},
                else: 0,
              },
            },
          },
        },
      },
      {
        $addFields: {
          date: '$_id.date',
          balance: {$subtract: ['$playedMoney', '$wonMoney']},
          comission: {
            $multiply: [{$subtract: ['$playedMoney', '$wonMoney']}, 0.15],
          },
        },
      },
    ]).sort({date: -1});
  }
}
