import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class TicketDTO {
    @Field(type => Number)
    stake: number;
    
    @Field(type => [BetDTO])
    bets: BetDTO[];
}
@InputType()
export class BetDTO {
    @Field(type => String)
    betId: string;

    @Field(type => String)
    type: string;
    
    @Field(type => String)
    value: string;

    @Field(type => String)
    fixtureName: string;

    @Field(type => Number)
    oddValue: number;

    @Field(type => String)
    fixtureId: string;
}