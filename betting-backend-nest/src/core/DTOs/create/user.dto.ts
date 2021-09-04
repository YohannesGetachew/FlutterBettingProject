import { InputType, Field } from '@nestjs/graphql';
import { CashierPermission, Role } from '../../models/user';

@InputType()
export class UserDto {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  username: string;

  @Field(type => Role, {nullable: true})
  role: Role;

  @Field()
  password: string;

  @Field({nullable: true})
  belongsToShop: string

  @Field(type => [CashierPermission],{nullable: true})
  cashierPermissions: CashierPermission[]
}