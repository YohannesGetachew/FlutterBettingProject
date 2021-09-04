import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bet } from '../../models/bet';
import { Model } from 'mongoose';
import { BaseService } from '../../../shared/base.service';


@Injectable()
export class BetService extends BaseService<Bet> {
  // TODO check for bet validity
  // TODO check for user's account balance, if the user is placing the bet
  // TODO get all placed bets, by date, by fixture
  constructor(@InjectModel(Bet.name) private BetModel: Model<Bet>) {
    super();
    this._model = BetModel;
  }

  // bets group by market type
  favMarkets() {
    return this.BetModel.aggregate([
      {
        $match: {"isPlaced": true}
      },
      {
        $group: {_id: "type", count: {$sum: 1}}
      },
      {
        $sort: {count: 1}
      }
    ]).limit(5);
  }

  // fixtureID, fixtureName, sport, BetCount
  favFixtures() {
    return this.BetModel.aggregate([
      {
        $match: {"isPlaced": true}
      },
      {
        $group: {_id: "fixtureID", count: {$sum: 1}}
      },
      {
        $sort: {count: 1}
      }
    ]).limit(5);
  }
}
