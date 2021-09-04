import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base';
import {Fixture} from "./fixture";

@ObjectType()
@Schema({ timestamps: true })
export class Sport extends Base {
  @Field({nullable: true})
  @Prop({unique: true, index: true})
  id: string;

  @Field()
  @Prop({unique: true, index: true})
  name: string;

  @Field({nullable: true})
  @Prop()
  icon: string;

  @Field({nullable: true})
  @Prop()
  order: number;

  @Field()
  @Prop({ default: true })
  isAvailable: boolean;

  @Field(type => [Fixture])
  fixtures: Fixture[];
}

// sport -> countries -> leagues -> fixtures(games) -> odd

export const SportSchema = SchemaFactory.createForClass(Sport);
