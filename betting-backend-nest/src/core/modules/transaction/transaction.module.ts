import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from "src/core/models/transaction";
import { TransactionService } from './transaction.service';
import { UserModule } from '../user/user.module';
import { TransactionResolver } from "src/core/resolvers/transaction.resolver";
import { ShopModule } from '../shop/shop.module';
import { MessageModule } from "../message/message.module";

@Module({
    imports: [
        MongooseModule.forFeature([      {
            name: Transaction.name,
            schema: TransactionSchema
          }]),
          UserModule,
          ShopModule,
          MessageModule
    ],
    providers: [
        TransactionService,
        TransactionResolver
    ],
    exports: [
        TransactionService
    ]
})
export class TransactionModule {}