import { Field, ObjectType } from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Base } from './base';
import { Country } from './country';
import { Sport } from './sport';
@ObjectType()
@Schema({timestamps: true})
export class League extends Base {
  @Field(type => String)
  @Prop({required: true, unique: true})
  id: string;

  @Field(type => String)
  @Prop({required: true})
  name: string;

  @Field(type => String, {nullable: true})
  @Prop()
  type: string; // league or cup ?

  @Field(type => String, {nullable: true})
  @Prop()
  logo: string;

  @Field(type => String)
  @Prop()
  countryId: string;

  @Field(type => Country)
  country: Country;

  @Field(type => String)
  @Prop()
  sportId: string;

  @Field(type => Sport)
  sport: Sport;

  @Field(type => String, {nullable: true})
  @Prop()
  order: number;

  @Field(type => Boolean)
  @Prop({default: true})
  isAvailable: boolean;

  @Field(type => Boolean)
  @Prop({default: false})
  isTop: boolean;
}

export const LeagueSchema = SchemaFactory.createForClass(League);
