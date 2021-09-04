import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { DepositRequestModule } from './modules/depositRequest/depositRequest.module';
import { TicketCorrectorService } from './modules/ticket/ticket-corrector.service';
import { TicketModule } from './modules/ticket/ticket.module';
import { TransactionModule } from './modules/transaction/transaction.module';

@Module({
  imports: [
    AuthModule,
    TicketModule,
    TransactionModule,
    DepositRequestModule
  ],
  providers: [TicketCorrectorService]
})
export class CoreModule {

}