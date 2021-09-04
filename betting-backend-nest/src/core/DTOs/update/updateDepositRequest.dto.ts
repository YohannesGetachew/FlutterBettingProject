import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateDepositRequestDto{
    @Field()
    amount: number
}
