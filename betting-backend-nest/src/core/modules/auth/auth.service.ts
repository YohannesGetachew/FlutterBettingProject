import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { JwtPayload } from './interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../../DTOs/create/user.dto';
import { UserService } from '../user/user.service';
import { LoginDto } from '../../DTOs/login.dto';
import { User } from 'src/core/models';
import { LoginResponse } from '../../response/login.response';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  isPhoneValid(phone: string) {
    // should start with 09
    // 0923275571
    return (
      phone.startsWith('09') && phone.length === 10 && Number(phone.slice(1))
    );
  }
  async register(userDto: UserDto): Promise<RegistrationStatus> {
    // validate phone number
    try {
      const exists = await this.userService.findOne({
        username: userDto.username,
      });
      if (exists) {
        throw new HttpException(
          'phone number already exists',
          HttpStatus.FORBIDDEN,
        );
      }
      if (this.isPhoneValid(userDto.username)) {
        const user = await this.userService.create(userDto);
        return {
          success: true,
          message: 'user registered',
          id: user._id,
        };
      } else {
        throw new Error('Invalid phone number');
      }
    } catch (err) {
      return {
        success: false,
        message: err,
        id: '0',
      };
    }
  }

  // how about login attempts ?
  //
  async login(loginUserDto: LoginDto): Promise<LoginResponse> {
    // find user in db
    const user = await this.userService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);

    return {
      accessToken: token,
      expiresIn: 3600,
      tokenType: 'bearer',
    };
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    const user = await this.userService.findOne(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ username }: User): any {
    const expiresIn = 3600; // an hour long

    const user: JwtPayload = { username };
    const accessToken = this.jwtService.sign(user, { expiresIn });
    return accessToken;
  }

  async isUserExists(phoneNumber) {
    const user = await this.userService.findOne({ username: phoneNumber });
    if (!user) {
      return new HttpException("User doesn't exist", 404);
    }
    return user;
  }

  async verifyUser(id: string) {
    const user = await this.userService.update(id, { isVerified: true, isActive: true });
    if (!user) {
      return new HttpException(
        "couldn't verify your account. please try again later",
        500,
      );
    }
    return user;
  }
  async resetPassword(id: string, password: string) {
    const user = await this.userService.update(id, { password });
    if (!user) {
      return new HttpException(
        "couldn't reset your password. please try again later",
        500,
      );
    }
    return user;
  }
}
