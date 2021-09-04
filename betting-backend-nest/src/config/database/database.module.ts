import { Module } from '@nestjs/common';
import { MongooseConfigService } from './mongoose-config.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRootAsync({useClass: MongooseConfigService, imports: [ConfigModule]}),
  ],
  exports: [
    MongooseModule
  ]
})
export class DatabaseModule { }
