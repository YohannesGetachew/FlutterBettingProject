import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class LeagueDTO {
    @Field(returns => Boolean, {nullable: true})
    isAvailable: boolean;
    @Field(returns => Boolean, {nullable: true})
    isTop: boolean;
}