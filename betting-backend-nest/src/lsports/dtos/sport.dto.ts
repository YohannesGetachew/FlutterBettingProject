import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class SportDTO {
    @Field(type => Boolean)
    isAvailable: boolean;
    @Field(returns => Number, {nullable: true})
    order: number;
}