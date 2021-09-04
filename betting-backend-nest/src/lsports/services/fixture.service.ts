import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fixture } from '../models/fixture';
import { BaseService } from './base.service';
import {GrpcMethod} from "@nestjs/microservices";
import {IFixture} from "../interfaces/fixture";

@Injectable()
export class FixtureService extends BaseService<Fixture> {
  constructor(@InjectModel(Fixture.name) private FixtureModel: Model<Fixture>) {
    super();
    this._model = FixtureModel;
  }
  async findAllNotExpired(leagues) {
    const filters = [
      {
        $match: {"status": {$in: [1, 9]}, "leagueId": {$in: leagues}}
      },
      {
        $addFields: {
          timeLeft: {
            $subtract: [
              { $dateFromString: { dateString: '$startDate' } },
              new Date(),
            ],
          },
          date: {$dateFromString: { dateString: '$startDate' } }
        },
      },
      {
        $match: {
          timeLeft: { $gt: 0 },
        },
      },
      {
        $sort: {date: 1}
      }
    ];
   return  await this.FixtureModel.aggregate(filters).exec();
  //   return this.findAll({league: {$in: leagues}, isAvailable: true});
  }
}
