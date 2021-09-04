import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CountryDTO {
    @Field(returns => Boolean, {nullable: true})
    isAvailable: boolean;

    @Field(returns => Number, {nullable: true})
    order: number;
}