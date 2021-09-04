import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class FixtureDTO {
    @Field(returns => Boolean)
    isAvailable: boolean;
}