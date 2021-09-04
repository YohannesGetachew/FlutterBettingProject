import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { LiveScore } from '../models/livescore';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LiveScoreService extends BaseService<LiveScore> {
  constructor(@InjectModel(LiveScore.name) private LiveScoreModel: Model<LiveScore>) {
    super();
    this._model = this.LiveScoreModel;
  }
}
