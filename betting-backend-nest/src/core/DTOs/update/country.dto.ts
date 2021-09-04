import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CountryDTO {
    @Field(returns => Boolean)
    isAvailable: boolean;

    @Field(returns => Number)
    order: number;
}