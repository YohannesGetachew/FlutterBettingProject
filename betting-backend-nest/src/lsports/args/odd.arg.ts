import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class OddArg {
    @Field(type => String, {nullable: true})
    fixtureId: string;
}