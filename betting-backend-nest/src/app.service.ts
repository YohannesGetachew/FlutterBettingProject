import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { App, Advertisement } from './core/models/app';
import { Model } from 'mongoose';
import { Smsservice } from './shared/sms/SMS.service';

@Injectable()
export class AppService {
  constructor(@InjectModel(App.name) public AppModel: Model<App>,
    //private smsService: Smsservice
  ) {
    // .then((response) => console.log(response))
    // .catch((err) => console.log(err))
  }
  create(app) {
    return this.AppModel.create(app);
  }
  async getApp() {
    const apps = await this.AppModel.find({});
    return apps[0];
  }
  update(id, app) {
    return this.AppModel.findOneAndUpdate({ _id: id }, app, { new: true });
  }
  getHello(): string {
    return 'Hello World!';
  }

  async updateAd(appId: string, ad: Advertisement) {
    let app = await this.AppModel.findOne({ _id: appId }).exec();
    app.advertisements = app.advertisements.map(a => a.id === appId ? ad : a);
    return this.update(appId, app);
  }

  async getVat(value: number) {
    const app = await this.getApp();
    return value / (1 + (app.vatRate ? app.vatRate : 0.15));
  }
  // TODO write a function which takes a backup of the database and store in a folder by name of that date. and zip the folder into a file and send it firebase storage
}
