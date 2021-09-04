import { JobService } from './core/modules/jobs/job.service';
import { JobsModule } from './core/modules/jobs/jobs.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule, GraphqlModule } from './config';
import { CoreModule } from './core/core.module';
import { MongooseModule } from '@nestjs/mongoose';
import { App, AppSchema } from './core/models/app';
import { AppResolver } from './core/resolvers/app.resolver';
import { FileResolver } from './core/resolvers/file.resolver';
import { DataLoaderInterceptor } from 'nestjs-graphql-dataloader'
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SmsModule } from './shared/sms/sms.module';
import LSportModule from './lsports/lsport.module';
import { SeedModule } from './seed/seed.module';
// import {LiveModule} from "./Live/Live.module";
@Module({
  imports: [
   // JobsModule,
    DatabaseModule,
    GraphqlModule,
    MongooseModule.forFeature([{ name: App.name, schema: AppSchema }]),
    ConfigModule.forRoot(),
    CoreModule,
    LSportModule,
   // LiveModule
//    SeedModule
    // SmsModule.register({
    //   apiKey: process.env.AFRICA_TALKING_SMS_API_KEY,
    //   username: process.env.AFRICA_TALKING_USERNAME
    // })
    
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AppResolver,
    FileResolver,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataLoaderInterceptor,
    }
  ],
})
export class AppModule { }
