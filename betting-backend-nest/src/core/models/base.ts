import {ObjectType, Field} from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export abstract class Base extends Document {
  @Field({nullable: true})
  _id: string;
  @Field({nullable: true})
  createdAt: string;
  @Field({nullable: true})
  updatedAt: string;
}