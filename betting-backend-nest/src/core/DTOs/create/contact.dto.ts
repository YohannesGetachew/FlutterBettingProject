import { InputType, PartialType, Field } from "@nestjs/graphql";
import { Contact } from "src/core/models/shop";

@InputType()
export class ContactDTO{
    @Field()
    type: string;
    @Field()
    value: string;
}