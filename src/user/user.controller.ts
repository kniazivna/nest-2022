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
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

//endpoint ('users')
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiOperation({ summary: 'get all users' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: [
        {
          id: 2,
          email: 'petro@gmail.com',
          name: 'user',
          city: 'Kyiv',
          age: 30,
          password: '123456',
          status: true,
        },
      ],
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.userService.getAll();
  }
  @ApiOperation({ summary: 'get one user by id' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 2,
        email: 'petro@gmail.com',
        name: 'user',
        city: 'Kyiv',
        age: 30,
        password: '123456',
        status: true,
      },
    },
  })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }
  @ApiOperation({ summary: 'get one user by id with posts' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        email: 'olena@gmail.com',
        name: 'Olena',
        city: 'Lviv',
        age: 34,
        password: '123456',
        status: true,
        posts: [
          {
            id: 3,
            title: 'Title',
            content: 'Some text',
            published: true,
            authorId: 1,
          },
        ],
      },
    },
  })
  //то як робити запити з постами і коментами, то так як нижче потрібно endpoints прописувати, чи я не правильно зрозуміла?
  @Get(':id/posts')
  getByIdAndPosts(@Param('id') id: string) {
    return this.userService.getByIdAndPosts(id);
  }

  @ApiOperation({ summary: 'get one user by id with comments' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 1,
        email: 'olena@gmail.com',
        name: 'Olena',
        city: 'Lviv',
        age: 34,
        password: '123456',
        status: true,
        Comment: [
          {
            id: 4,
            text: 'Some text',
            published: true,
            authorId: 1,
            postId: 3,
          },
        ],
      },
    },
  })
  @Get(':id/comments')
  getByIdAndComments(@Param('id') id: string) {
    return this.userService.getByIdAndComments(id);
  }

  @ApiOperation({ summary: 'get one user by id with posts and comments' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 3,
        email: 'olga@gmail.com',
        name: 'Olga',
        city: 'Lviv',
        age: 2,
        password: '123456',
        status: true,
        posts: [
          {
            id: 4,
            title: 'Title',
            content: 'Some text',
            published: true,
            authorId: 3,
          },
        ],
        Comment: [
          {
            id: 5,
            text: 'Some text',
            published: true,
            authorId: 3,
            postId: 4,
          },
        ],
      },
    },
  })
  @Get(':id/posts_and_comments')
  getByIdAndPostsAndComments(@Param('id') id: string) {
    return this.userService.getByIdAndPostsAndComments(id);
  }

  @ApiOperation({ summary: 'create user' })
  @ApiOkResponse({
    status: 201,
    schema: {
      example: {
        name: 'user',
        email: 'user1@gmail.com',
        age: 34,
        city: 'Lviv',
        password: '123456',
        status: false,
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'update user' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 6,
        email: 'mfngfngn@gmail.com',
        name: 'UpdatedUser',
        city: 'UpdatedCity',
        age: 4,
        password: '111111',
        status: false,
      },
    },
  })
  @Patch(':id')
  updateUser(@Body() userData: UpdateUserDto, @Param('id') id: string) {
    return this.userService.updateUser(userData, id);
  }

  @ApiOperation({ summary: 'delete user' })
  @ApiOkResponse({
    status: 204,
    schema: {
      example: {
        id: 5,
        email: 'test@gmail.com',
        name: 'Test',
        city: 'Ternopil',
        age: 4,
        password: '111111',
        status: false,
      },
    },
  })
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
