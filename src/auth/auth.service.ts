import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';
import { AuthUserDto } from './dto/auth-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async registration(userDto: CreateUserDto) {
    const findUser = await this.userService.getByEmail(userDto.email);

    if (findUser) {
      throw new HttpException('User is already exist', HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await bcrypt.hash(userDto.password, 7);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashedPassword,
    });

    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, name: user.name };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async login(authUserDto: AuthUserDto) {
    const user = await this.validateUser(authUserDto);
    return this.generateToken(user);
  }

  private async validateUser(user: AuthUserDto) {
    const userDB = await this.userService.getByEmail(user.email);
    const passwordEqual = await bcrypt.compare(user.password, userDB.password);

    if (userDB && passwordEqual) {
      return userDB;
    }

    throw new UnauthorizedException({ message: 'wrong email or password' });
  }
}
