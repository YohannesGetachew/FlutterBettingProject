import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class MarketDTO {
    @Field(returns => Boolean)
    isAvailable: boolean;
}