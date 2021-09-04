import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from '../models/country';
import { BaseService } from './base.service';

@Injectable()
export class CountryService extends BaseService<Country> {
  constructor(@InjectModel(Country.name) private CountryModel: Model<Country>) {
    super();
    this._model = CountryModel;
  }
  // async findBySportName(sportName: string) {
  //   const countries = await this.findAll({});
  //   return countries.filter(country => country.sports.includes(sportName));
  // }
}