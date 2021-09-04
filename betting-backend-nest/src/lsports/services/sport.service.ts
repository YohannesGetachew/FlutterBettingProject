import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sport } from '../models/sport';
import { BaseService } from './base.service';

@Injectable()
export class SportService extends BaseService<Sport> {
  constructor(@InjectModel(Sport.name) private SportModel: Model<Sport>) {
    super();
    this._model = this.SportModel;
  }
  findAll(filters): Promise<Sport[]> {
    return this.SportModel.aggregate(
      [
        {
          $addFields: {
            customOrder: { $ifNull: [ "$order", 9999 ] }
          }
        },
        {
          $sort: {customOrder: 1}
        }
      ]
    ).exec();
  }
}
