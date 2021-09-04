import { Module } from '@nestjs/common';
import { TicketCorrectorService } from './ticket-corrector.service';
import { TicketResolver } from '../../resolvers/ticket.resolver';
import { TicketService } from './ticket.service';
import { BetModule } from '../bet/bet.module';
import { AppService } from '../../../app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from 'src/core/models/ticket';
import { App, AppSchema } from 'src/core/models/app';
import { ShopModule } from '../shop/shop.module';
import { UserModule } from '../user/user.module';
import {DatabaseModule} from "../../../lsports/database.module";
import { MessageModule } from '../message/message.module';
@Module({
  imports: [
    BetModule,
    MongooseModule.forFeature([
      {name: Ticket.name, schema: TicketSchema},
      {name: App.name, schema: AppSchema}
    ]),
    ShopModule,
    UserModule,
    DatabaseModule,
    MessageModule
  ],
  providers: [
    TicketCorrectorService,
    TicketService,
    TicketResolver,
    AppService
  ],
  exports: [TicketService]
})
export class TicketModule {}
