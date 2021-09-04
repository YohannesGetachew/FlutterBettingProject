import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginResponse } from '../response/login.response';
import { LoginDto, UserDto } from '../DTOs';
import { RegisterResponse } from '../response/register.response';
import { User } from '../models/user';
import { CurrentUser } from 'src/shared/decorators/current-user.decorator';
import { GqlAuthGuard } from 'src/shared/guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import { AuthService } from '../modules/auth/auth.service';
import { RoleGuard } from '../../shared/guards/role.guard';
import { Role } from 'src/shared/decorators/role.decorator';

/**
 * TODO
 * - generate new token from refresh token
 * - get the logged user
 * - forgot password
 */
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}
  @Query((returns) => User)
  @UseGuards(GqlAuthGuard)
  whoami(@CurrentUser() user: User) {
    return user;
  }
  @Mutation((returns) => LoginResponse)
  login(@Args('loginInput') loginInput: LoginDto) {
    return this.authService.login(loginInput);
  }
  @Mutation((returns) => RegisterResponse)
  register(@Args('userInput') userInput: UserDto) {
    return this.authService.register(userInput);
  }
  @Query((returns) => User)
  isUserExists(@Args('phoneNumber') phoneNumber: String) {
    return this.authService.isUserExists(phoneNumber);
  }
  // registeration
  @Mutation(returns => User)
  verify(
    @Args('id') id: String,
    @Args('accessToken') accessToken: String,
  ) {
    return this.authService.verifyUser(id.toString());
  }
  @Mutation(returns => User)
  resetPassword(
    @Args('id') id: String,
    @Args('password') password: String,
    @Args('accessToken') accessToken: String,
  ) {
    return this.authService.resetPassword(id.toString(), password.toString());
  }

  // TODO
  // @Mutation()
  // refreshToken() {}
}
