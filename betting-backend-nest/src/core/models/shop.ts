import { ObjectType, Field, InputType } from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Base } from './base';
import { User } from './user';

export enum ShopType {
  online = "ONLINE", branch = "BRANCH"
}
@ObjectType()
export class Location {
  @Field(returns => Number)
  lat: number;
  @Field(returns => Number)
  lon: number;
}

@ObjectType()
@Schema({timestamps: true})
export class Shop extends Base {
  @Field()
  @Prop({index: true, unique: true})
  branchName: string;

  @Field(returns => Boolean)
  @Prop({default: true})
  isActive: boolean;

  @Field(returns => User)
  admin: User;

  @Prop({required: true})
  adminId: string;


  @Prop({default: ShopType.branch})
  type: ShopType;

  @Field(returns => [Contact], {nullable: true})
  @Prop({required: false, default: []})
  contacts: Contact[];

  @Field(returns => Location, {nullable: true})
  @Prop({required: false})
  location: Location;
}

@ObjectType()
export class Contact {
  @Field()
  type: string;
  @Field()
  value: string;
}
export const ShopSchema = SchemaFactory.createForClass(Shop);