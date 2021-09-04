import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bookmaker } from '../models/bookmaker';
import { BaseService } from './base.service';


@Injectable()
export class BookmakerService extends BaseService<Bookmaker> {
  constructor(@InjectModel(Bookmaker.name) private BookmakerModel: Model<Bookmaker>) {
    super();
    this._model = BookmakerModel;
  }
}