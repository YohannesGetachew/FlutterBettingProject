import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class LeagueDTO {
    @Field(returns => Boolean)
    isAvailable: boolean;
}