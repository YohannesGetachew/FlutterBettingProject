import { Field, ArgsType, ObjectType } from '@nestjs/graphql';
import { TransactionType } from '../models/transaction';

@ObjectType()
export class DateRange{
   @Field()
   from: string;
   @Field()
   to: string;
}
@ArgsType()
export class TransactionArg{
   @Field({nullable: true})
   customerUsername: string;
   @Field({nullable: true})
   cashierUsername: string;
   @Field(type => TransactionType, {nullable: true})
   type: TransactionType;
   @Field(type => String, {nullable: true})
   from: string;
   @Field(type => String, {nullable: true})
   to: string;
}