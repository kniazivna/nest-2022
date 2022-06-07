import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

//endpoint ('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @Patch()
  updateUser(@Body() userDto: CreateUserDto, @Param('id') id: string) {
    return userDto;
  }

  @Delete()
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
