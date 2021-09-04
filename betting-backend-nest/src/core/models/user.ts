// models, can be db schema or GraphQl
/**
 * user schema have basic data about the user.
 * attributes - firstName, lastName, username, usernameType, refreshToken, isVerified, isActive, role
 * roles [ADMIN, CUSTOMER]
 * */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {ObjectType, Field, registerEnumType} from '@nestjs/graphql';

import { Base } from './base';

export enum UsernameType {
  EMAIL = "EMAIL",
  PHONE = "PHONE"
}

export enum CashierPermission {
  CREATE_DEPOSIT = "CREATE_DEPOSIT",
  CREATE_WITHDRAWAL = "CREATE_WITHDRAWAL",
  HANDLE_DEPOSIT_REQUEST = "HANDLE_DEPOSIT_REQUEST",
  PLACE_TICKETS = "PLACE_TICKETS"
}

registerEnumType(CashierPermission, {
  name: 'CashierPermission'
})


registerEnumType(UsernameType, {
  name: 'UsernameType',
});

export enum Role {
  SUPER_ADMIN = "SUPER-ADMIN",
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
  CASHIER = "CASHIER"
}

registerEnumType(Role, {
  name: 'Role',
});

@ObjectType()
class UserDetail {
  @Field(returns => Number, {nullable: true})
  accountBalance: number; // if only the user is customer

  @Field({nullable: true})
  profileImage: string;
}

@ObjectType()
@Schema({timestamps: true})
export class User extends Base {
  @Field()
  @Prop()
  firstName: string;

  @Field()
  @Prop()
  lastName: string;

  @Field()
  @Prop({unique: true, index: true})
  username: string;

  @Prop()
  password: string;

  @Field(type => UsernameType)
  @Prop({default: UsernameType.PHONE})
  usernameType?: UsernameType;

  @Field()
  @Prop({default: false})
  isVerified?: boolean;

  @Field()
  @Prop({default: false})
  isActive?: boolean;

  @Field()
  @Prop({default: false})
  isLocked?: boolean;

  @Field(type => Role)
  @Prop({default: Role.CUSTOMER})
  role?: Role

  @Field(type => Number)
  @Prop({default: 0})
  accountBalance: number;

  @Field(type => String)
  @Prop({default: 'https://res.cloudinary.com/dtz77duv8/image/upload/v1596730625/default-profile-image_d8f6uf.png'})
  profileImage: string;

  // only for cashiers
  @Field(type => String, {nullable: true})
  @Prop()
  belongsToShop: string

  @Field(type => [CashierPermission], {nullable: true})
  @Prop()
  cashierPermissions: CashierPermission[]
}


export const UserSchema =  SchemaFactory.createForClass(User);
