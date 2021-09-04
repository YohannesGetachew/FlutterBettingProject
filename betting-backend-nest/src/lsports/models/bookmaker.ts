import { Field, ObjectType } from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Base } from './base';
@ObjectType()
@Schema({timestamps: true})
export class Bookmaker extends Base {
  @Field(type => String, {nullable: true})
  @Prop()
  id: string;

  @Field(type => String, {nullable: true})
  @Prop()
  name: string;
}
export const BookmakerSchema = SchemaFactory.createForClass(Bookmaker);