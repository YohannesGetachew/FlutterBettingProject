import { Module } from '@nestjs/common';
import { UserModule } from '../core/modules/user/user.module';
import { SeedService } from './seed.service';
import { App, AppSchema } from '../core/models/app';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from '../app.service';
import { TicketModule } from '../core/modules/ticket/ticket.module';


@Module({
  imports: [
    MongooseModule.forFeature([{name: App.name, schema: AppSchema}]),
    UserModule,
    TicketModule,
    //MarketModule, FixtureModule, BookmakerModule
  ],
  providers: [SeedService, AppService]
})
export class SeedModule {

}
