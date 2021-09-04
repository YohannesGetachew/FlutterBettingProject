import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base';

@ObjectType()
@Schema({ timestamps: true })
export class Country extends Base {
  @Field(type => String)
  @Prop({ index: true })
  id: string;

  @Field(type => String)
  @Prop({ unique: true, index: true })
  name: string;

  @Field(type => String, {nullable: true})
  @Prop()
  code: string;

  @Field(type => String, {nullable: true})
  @Prop()
  flag: string;

  @Field(type => Number, {nullable: true})
  @Prop() // 0 means order is not set
  order: number;

  @Field(type => Boolean)
  @Prop({ default: true })
  isAvailable: boolean; // what if admin set it to false intentionally? should i set it to true again? of course not!
}

export const CountrySchema = SchemaFactory.createForClass(Country);
