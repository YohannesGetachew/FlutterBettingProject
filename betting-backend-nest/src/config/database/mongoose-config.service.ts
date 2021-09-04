import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import {ConfigService} from '@nestjs/config';


@Injectable()
export class MongooseConfigService  implements MongooseOptionsFactory {
  constructor(private configService: ConfigService) {}
  createMongooseOptions(): MongooseModuleOptions {
    return {
 //     uri: this.configService.get<string>('REMOTE_DATABASE_URL'),
      uri: this.configService.get<string>('DATABASE_URL'),
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      retryAttempts: 8,
    };
  }
}
