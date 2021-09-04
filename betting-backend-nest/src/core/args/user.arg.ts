import {ArgsType, Field} from '@nestjs/graphql';
import { Role } from '../models';

@ArgsType()
export class UserArg {
  @Field({nullable: true})
  firstName: string;
  @Field({nullable: true})
  lastName: string;
  @Field({nullable: true})
  username: string;
  @Field(type => Role, {nullable: true})
  role: Role;

}