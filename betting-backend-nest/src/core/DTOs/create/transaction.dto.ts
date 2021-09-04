import { Field, InputType } from "@nestjs/graphql";
import { TransactionType } from "src/core/models/transaction";

@InputType()
export class TransactionDTO{
    @Field(type => TransactionType)
    type: TransactionType;

    @Field(type => Number)
    amount: number;

    @Field(type => String)
    customer: string;
}