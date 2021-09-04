import { ObjectType,Field } from "@nestjs/graphql";
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base';
import { TransactionType } from "./transaction";
import { User } from "./user";

export const getMessage = (type: string, variables: any) => {
      switch(type){
          case "TICKET_WON":
              return {
                  messageHead: 'You won!!!',
                  messageBody: `Congratulations the ticket you placed with the placement id ${variables.placementId} won birr${variables.estimatedWin}.`
              }
          case "TRANSACTION_SUCCESS":
              return {
                  messageHead: 'Transaction successful',
                  messageBody: `You have ${variables.transactionType === TransactionType.DEPOSIT ? 'deposited' : 'withdrawn' } birr ${variables.transactionAmount} successfully.`
              }
          case "DEPOSIT_REQUEST_SENT":
              return{
                  messageHead: 'Deposit request sent',
                  messageBody: `The deposit request you sent (ID : ${variables.requestId}) will be processed shortly. Check messages and balance regularly for updates.`
              }
          case "DEPOSIT_REQUEST_DENIED":
              return{
                  messageHead: 'Deposit request denied',
                  messageBody: `We are sorry to inform you that the deposit request you sent (ID : ${variables.requestId}) has been denied. Please call us or go to our nearest shop for more informaion`
              }
          default:
              return {
                 messageHead: variables.customMessageHead, messageBody: variables.customMessageBody
              }
      }
}

@ObjectType()
@Schema({timestamps: true})
export class Message extends Base {
    @Field(type => String)
    @Prop({required: true})
    messageHead: string

    @Field(type => String)
    @Prop({required: true})
    messageBody: string
    
    @Field(type => Boolean)
    @Prop({required: true, default: false})
    isRead: boolean

    @Prop({required: true})
    @Field(type => String)
    customerId: string 
}

export const MessageSchema = SchemaFactory.createForClass(Message);
