import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class LeagueArg {
    @Field({nullable: true})
    isTop: boolean;
    @Field({nullable: true})
    isAvailable: boolean;
}