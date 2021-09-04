import { ObjectType, Field } from "@nestjs/graphql";
import { Schema, Prop } from "@nestjs/mongoose";
import { Base } from './base';

@ObjectType()
export class ReportDetail {
    @Field()
    date: string;

    @Field()
    noPlayed: number;

    @Field()
    playedMoney: number;

    @Field()
    noWinners: number;

    @Field()
    wonMoney: number;

    @Field()
    balance: number;

    @Field()
    comission: number;
}

@ObjectType()
@Schema({timestamps: true})
export class Report extends Base  {
    @Field()
    @Prop()
    id: string;

    @Field(type => [ReportDetail])
    @Prop()
    details: ReportDetail[];

}