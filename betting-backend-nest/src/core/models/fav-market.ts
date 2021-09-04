import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType()
export class FavMarket {
    @Field(returns => String)
    _id: string;

    @Field(returns => Number)
    count: number;
}