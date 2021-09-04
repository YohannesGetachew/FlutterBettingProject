import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType()
export class FavFixture {
    @Field(returns => String)
    id: string;

    @Field(returns => String)
    name: string;

    @Field(returns => String)
    sport: string;

    @Field(returns => Number)
    count: number;
}