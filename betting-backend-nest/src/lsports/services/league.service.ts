import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { League } from '../models/league';
import { BaseService } from './base.service';


@Injectable()
export class LeagueService extends BaseService<League> {
  constructor(@InjectModel(League.name) private LeagueModel: Model<League>) {
    super();
    this._model = LeagueModel;
  }
  findByCountryIds(keys) {
    return this.LeagueModel.find({countryId: {$in: keys}}).exec();
  }
}
