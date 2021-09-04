import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import {  User } from '../models';
import { UserService } from '../modules/user/user.service';
import { UserUpdateDTO } from '../DTOs/update/user-update.dto';
import { UserArg } from '../args/user.arg';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/shared/guards/auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
import { Role } from 'src/shared/decorators/role.decorator';
import { CurrentUser } from 'src/shared/decorators/current-user.decorator';


// TODO user details: [accountBalance, profileImage0]
@Resolver(of => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    ) {}
  @Query(returns => [User])
  users(@Args() args: UserArg) {
    // TODO create user args
    return this.userService.findAll(args);
  }
  @Query(returns => User)
  user(@Args('id') id: string) {
    return this.userService.findById(id);
  }
  @Mutation(returns => User)
  updateUser(@Args('id') id: string, @Args('updateInput') updateInput: UserUpdateDTO) {
    return this.userService.update(id, updateInput);
  }
  @Mutation(returns => User)
  updateProfileImage(@Args('id') id: string, @Args('image') image: string) {
    return this.userService.updateProfileImage(id, image);
  }

  @Mutation(returns => String)
    @UseGuards(GqlAuthGuard, RoleGuard)
    @Role('ADMIN')
    changeUserActive(@CurrentUser() currentUser: User, @Args('id') userToChangeActiveId: string){
        return this.userService.changeUserActive(currentUser, userToChangeActiveId)
    }

  // Auth guard
  // admin guard
}