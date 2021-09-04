import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class OddArg {
    @Field({nullable: true})
    fixture: number;
}