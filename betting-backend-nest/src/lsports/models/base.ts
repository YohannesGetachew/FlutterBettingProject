import { Document } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class Base extends Document {
  @Field(type => ID)
  _id: string;
  @Field(type => String, {nullable: true})
  createdAt: string;
  @Field(type => String, {nullable: true})
  updatedAt: string;
}