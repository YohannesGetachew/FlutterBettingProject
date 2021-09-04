import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class AvailabilityDTO {
    @Field(type => Boolean)
    isAvailable: boolean;
}