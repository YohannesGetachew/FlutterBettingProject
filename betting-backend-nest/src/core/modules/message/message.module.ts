import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from "src/core/models/message";
import { MessageService } from "./message.service";
import {MessageResolver} from 'src/core/resolvers/message.resolver'

@Module({
    imports: [
        MongooseModule.forFeature([      {
            name: Message.name,
            schema: MessageSchema
          }]),
    ],
    providers: [
        MessageService,
        MessageResolver
    ],
    exports: [
        MessageService
    ]
})
export class MessageModule {}