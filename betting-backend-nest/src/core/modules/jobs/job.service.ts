import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression} from '@nestjs/schedule';
import { TicketService } from '../ticket/ticket.service';
import { TicketStatus } from '../../models/ticket';
import { BetService } from '../bet/bet.service';

@Injectable()
export class JobService {
  private readonly logger = new Logger(JobService.name);

  constructor(private ticketService: TicketService, private betService: BetService) {
   // this.clearOldTickets();
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  async updateTicketStatus() {
    // all placed tickets
    this.ticketService.findAll({status: TicketStatus.PENDING, isPlaced: true}).then((tickets) => {
      tickets.forEach(async (ticket) => {
        this.betService.findAll({ticketID: ticket._id}).then(async (bets) => {
          await this.ticketService.correctTicket(ticket, bets);
        })
      })
    });
  }

  @Cron(CronExpression.EVERY_3_HOURS)
  async clearOldTickets() {
    return await this.ticketService.deleteOldTickets();
  }

 }
