import { Module } from '@nestjs/common';
import { BetService } from './bet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Bet, BetSchema } from '../../models/bet';
import { BetResolver } from '../../resolvers/bet.resolver';


@Module({
  imports: [
    MongooseModule.forFeature([{name: Bet.name, schema: BetSchema}])
  ],
  providers: [BetService, BetResolver],
  exports: [BetService]
})
export class BetModule {}
