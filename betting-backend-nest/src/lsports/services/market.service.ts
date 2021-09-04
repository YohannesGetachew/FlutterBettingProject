import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Market } from '../models/market';
import { BaseService } from './base.service';


@Injectable()
export class MarketService extends BaseService<Market> {
  constructor(@InjectModel(Market.name) private MarketModel: Model<Market>) {
    super();
    this._model = MarketModel;
  }
}
