import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateTicketDTO {
    @Field({defaultValue: true})
    isPlaced: boolean;

    @Field(returns => Number, {nullable: true})
    stake: number;
}