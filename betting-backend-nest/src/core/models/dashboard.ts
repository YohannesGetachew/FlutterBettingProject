import { ObjectType, Field, registerEnumType } from "@nestjs/graphql";
import { FavMarket } from './fav-market';
import { FavFixture } from './fav-fixture';

export enum DashboardFilterDate {
    TODAY = "today",
    YESTERDAY = "yesterday",
    THIS_WEEK = "this week",
    LAST_WEEK = "last week",
    THIS_MONTH = "this month",
    LAST_MONTH = "last month"
}

registerEnumType(DashboardFilterDate, {
    name: 'DashboardFilterDate',
});

@ObjectType()
export class Board {
    @Field(type=>String)
    title: string;
    @Field(type=> Number)
    value: number;
}
@ObjectType()
export class Dashboard {
    @Field(type=>[Board])
    boards: Board[];
    @Field(type=>[FavMarket])
    favMarkets: FavMarket[];
    @Field(type => [FavFixture])
    favFixtures: FavFixture[];
}