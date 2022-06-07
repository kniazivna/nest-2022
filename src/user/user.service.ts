import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private _users = [];

  getAll() {
    return this._users;
  }

  getById(id: string) {
    this._users.find((user) => id === user.id);
  }

  createUser(userDto: CreateUserDto) {
    this._users.push({
      ...userDto,
      id: new Date().valueOf(),
    });
    return userDto;
  }

  deleteUser(id: string) {
    this._users.filter((user) => user.id !== id);
  }
}
