import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {ObjectType, Field, registerEnumType} from '@nestjs/graphql';
import { Base } from './base';
import { Ticket } from './ticket';

@ObjectType()
@Schema({timestamps: true})
export class Bet extends Base{
  @Field()
  @Prop()
  type: string; // MARKET NAME

  @Field()
  @Prop()
  value: string; // oddName eg. Draw

  @Field()
  @Prop()
  oddValue: number;

  @Field()
  @Prop()
  fixtureId: string;

  @Field()
  @Prop()
  fixtureName: string;

  @Field()
  @Prop({required: true})
  betId: string;


  @Field(type => Number, {nullable: true})
  @Prop()
  status: number;

  @Prop({default: false, index: true})
  isPlaced: boolean;

  @Prop()
  ticketID: string; // object id of ticket

  @Field(type => Ticket)
  ticket: Ticket;
}

export const BetSchema = SchemaFactory.createForClass(Bet);
