import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TicketModule } from '../ticket/ticket.module';
import { BetModule } from '../bet/bet.module';

@Module({
    imports: [
        ScheduleModule.forRoot(),
        TicketModule,
        BetModule
    ],
    controllers: [],
    providers: [
        JobService
    ],
})
export class JobsModule { }
