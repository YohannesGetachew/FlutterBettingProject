import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { DepositRequestService } from './depositRequest.service';
import { UserModule } from '../user/user.module';
import { DepositRequestResolver } from "src/core/resolvers/depositRequest.resolver";
import { DepositRequest, DepositRequestSchema } from "src/core/models/depositRequest";
import { TransactionModule } from "../transaction/transaction.module";
import {MessageModule} from 'src/core/modules/message/message.module'

@Module({
    imports: [
        MongooseModule.forFeature([      {
            name: DepositRequest.name,
            schema: DepositRequestSchema
          }]),
          UserModule,
          TransactionModule,
          MessageModule
    ],
    providers: [
        DepositRequestService,
        DepositRequestResolver
    ],
    exports: [
        DepositRequestService
    ]
})
export class DepositRequestModule {}