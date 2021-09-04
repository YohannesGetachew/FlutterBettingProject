import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base';
import { Market } from './market';
import { Fixture } from './fixture';
export interface Bet {
  id: string;
  name: string;
  startPrice: string;
  baseline: string;
  price: string; // current price
  status: number;
  settlement: BetSettlement; // enum
  lastUpdate: string;
}

export enum BetSettlement {
  'Cancelled' = -1,
  'Loser' = 1,
  'Winner' = 2,
  'Refund' = 3,
  'HalfLost' = 4,
  'HalfWon' = 5,
}
registerEnumType(BetSettlement, {
  name: 'BetSettlement',
});
@ObjectType()
export class Bets {
  @Field({nullable: true})
  id: string;

  @Field({nullable: true})
  name: string;

  @Field(type => Number, {nullable: true})
  startPrice: string;

  @Field({nullable: true})
  baseline: string;

  @Field(type => Number, {nullable: true})
  price: number; // current price

  @Field(type => Number, {nullable: true})
  status: number; // current price

  @Field(type => BetSettlement, {nullable: true})
  settlement: BetSettlement; // enum

  @Field({nullable: true})
  lastUpdate: string;
}
@ObjectType()
@Schema({ timestamps: true })
export class Odd extends Base {
  @Field()
  @Prop()
  marketId: string;

  @Field(type => Market,{nullable: true})
  market: Market;

  @Field()
  @Prop()
  fixtureId: string;

  @Field(type => Fixture)
  fixture: Fixture;
  
  @Field()
  @Prop()
  bookmakerId: string;

  @Field()
  bookmaker: string;
  
  @Field(type => [Bets], {nullable: true})
  @Prop()
  bets: Bets[];
}

@ObjectType()
export class BasicOdd {
  @Field((type) => [Odd], { nullable: true })
  odds: Odd[];

  @Field((type) => Number, { defaultValue: 0 })
  more: number;
}
export const OddSchema = SchemaFactory.createForClass(Odd);
