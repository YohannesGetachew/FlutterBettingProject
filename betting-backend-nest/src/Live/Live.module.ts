import { Module } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import * as Redis from 'ioredis';
import { LiveController } from './live.controller';
import { LiveService } from './live.service';


const PubService = {
  provide: 'PUB_SUB',
  useFactory: () => {
    const options = {
      host: 'localhost',
      port: 6379
    };

    return new RedisPubSub({
      publisher: new Redis(options),
      subscriber: new Redis(options),
    });
  },
};
@Module({
  controllers: [LiveController],
  providers: [
    LiveService,
    PubService
  ],
  exports: [
    LiveService,
    PubService
  ],
})
export class LiveModule {}
