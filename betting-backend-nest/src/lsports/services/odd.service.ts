import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bet } from 'src/core/models/bet';
import {BetDTO} from 'src/core/DTOs/create/ticket.dto'
import { BasicOdd, Odd } from '../models/odd';
import { BaseService } from './base.service';

@Injectable()
export class OddService extends BaseService<Odd> {
  bal = {
    '1': 1,
    X: 2,
    '2': 3,
    '1X': 1,
    '12': 2,
    X2: 3,
  };
  constructor(@InjectModel(Odd.name) private OddModel: Model<Odd>) {
    super();
    this._model = this.OddModel;
  }
  async basicOdds(fixture: string): Promise<BasicOdd | {}> {
    const basicTypes = ['1', '7', '5'];
    const bal = {
      '1': 1,
      X: 2,
      '2': 3,
      '1X': 1,
      '12': 2,
      X2: 3,
    };
    // filter expired games
    // const e = await this.OddModel.aggregate([
    //   {
    //     $match: {
    //       fixtureId: { $eq: fixture },
    //       marketId: { $in: basicTypes },
    //     },
    //   },
    //   {
    //     $addFields: {
    //       more: { $sum: 1}
    //     }
    //   },
    //   {
    //     $project: {
    //       more: "$more",
    //       odds: "$bets"
    //     },
    //   },
    // ]).exec();
    // console.log(e);
    const odds = await this.OddModel.find({
      fixtureId: fixture,
      bookmakerId: "8",
      marketId: { $in: basicTypes },
    }).exec();
    return {
      odds: odds.map(res => this.sortOdds(res, res._id,  res.marketId)),
      more: (await this.findAll({ fixtureId: fixture })).reduce(
        (pr, cur) => (pr += cur.bets.length),
        0,
      ),
    };
  }

  async findByFixtureIds(keys) {
    console.log(keys);
    const odds = await this.OddModel.aggregate([
      {
        $match: { fixtureId: { $in: keys }, bookmakerId: "8" },
      }
    ]).exec();
    return odds.map((odd) => this.sortOdds(odd, odd._id, odd.marketId));
  }

  sortOdds(doc, id, marketId) {
    return {...doc, marketId, _id: id, bets: doc.bets.sort((a,b) => {

      if(this.bal[a.name] && this.bal[b.name]) {
        return this.bal[a.name] - this.bal[b.name]
      }
    })}
  }

  async getCurrentBet(betToUpdate: Bet): Promise<BetDTO>{
    const oddMarket = await this.findOne({'bets.id': betToUpdate.betId})
    if(!oddMarket){
      throw new HttpException('Odd of bet not found', HttpStatus.NOT_FOUND)
    }
    const updatedBet = oddMarket.bets.find(bet => bet.id === betToUpdate.betId)
    return {
      betId: betToUpdate.betId, 
      type: betToUpdate.type, 
      value: betToUpdate.value, 
      fixtureName: betToUpdate.fixtureName, 
      fixtureId: betToUpdate.fixtureId,
      oddValue: updatedBet.price
    }
  }

}
