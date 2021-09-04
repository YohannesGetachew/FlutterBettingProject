import { InputType, PartialType } from "@nestjs/graphql";
import { UserDto } from '../create/user.dto';

@InputType()
export class UserUpdateDTO extends PartialType(UserDto) {}