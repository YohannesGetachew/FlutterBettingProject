import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { Base } from './base';
import { User } from './user';
import { Shop } from './shop';


export enum TransactionType {
    DEPOSIT = "DEPOSIT",
    WITHDRAW = "WITHDRAW"
}
registerEnumType(TransactionType, {
    name: 'TransactionType',
});

@ObjectType()
@Schema({timestamps: true})
export class Transaction extends Base {
    @Field(type => TransactionType)
    @Prop({required: true, index: true})
    type: TransactionType;

    @Field(type => Number)
    @Prop({required: true})
    amount: number;

    @Field(type => User)
    customer: User;

    @Prop({required: true})
    customerId: string;

    @Field(type => User)
    cashier: User;

    @Prop({required: true})
    cashierId: string;

    @Field(type => Number)
    @Prop({required: true})
    balanceAfterTransaction: number

}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);