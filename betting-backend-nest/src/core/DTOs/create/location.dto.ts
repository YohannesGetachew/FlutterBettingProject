import { InputType, Field } from "@nestjs/graphql";


@InputType()
export class LocationDTO {
    @Field(returns => Number)
    lat: number;
    @Field(returns => Number)
    lon: number;
}