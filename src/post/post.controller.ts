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
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @ApiOperation({ summary: 'get all posts' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: [
        {
          id: 2,
          title: 'Title',
          content: 'Some text',
          published: false,
          authorId: 2,
        },
      ],
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.postService.getAll();
  }

  @ApiOperation({ summary: 'get one post by id' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 4,
        title: 'Title',
        content: 'Some text',
        published: true,
        authorId: 3,
      },
    },
  })
  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.postService.getById(id);
  }

  @ApiOperation({ summary: 'get one post by id with post comments' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 2,
        title: 'Title',
        content: 'Some text',
        published: false,
        authorId: 2,
        comments: [
          {
            id: 3,
            text: 'Some text',
            published: true,
            authorId: 2,
            postId: 2,
          },
        ],
      },
    },
  })
  @Get('/:id/comments')
  getByIdAndComments(@Param('id') id: string) {
    return this.postService.getByIdAndComments(id);
  }

  @ApiOperation({ summary: 'create post' })
  @ApiOkResponse({
    status: 201,
    schema: {
      example: {
        title: 'Title',
        content: 'Some text',
        published: true,
        authorId: 2,
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createPost(@Body() postDto: CreatePostDto) {
    return this.postService.createPost(postDto);
  }

  @ApiOperation({ summary: 'update post' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 4,
        title: 'UpdatedTitle',
        content: 'UpdatedTextContent',
        published: true,
        authorId: 3,
      },
    },
  })
  @Patch('/:id')
  updatePost(@Body() postData: UpdatePostDto, @Param('id') id: string) {
    return this.postService.updatePost(postData, id);
  }

  @ApiOperation({ summary: 'delete post' })
  @ApiOkResponse({
    status: 204,
    schema: {
      example: {
        id: 5,
        email: 'mfngfngn@gmail.com',
        name: 'jfjfjgjghj',
        city: 'Ternopil',
        age: 4,
        password: '111111',
        status: false,
      },
    },
  })
  @ApiOperation({ summary: 'delete user' })
  @ApiOkResponse({
    status: 204,
    schema: {
      example: {
        id: 7,
        title: 'Title',
        content: 'Some text',
        published: true,
        authorId: 2,
      },
    },
  })
  @Delete('/:id')
  deleteUser(postDto: CreatePostDto, @Param('id') id: string) {
    return this.postService.deletePost(postDto, id);
    //не розумію, що не так з postDto?підсвічує його, типу не відповідає моделі
    //змінила  в сервісі UserWhereUniqueInput на PostWhereInput і все норм, але нз чи то правильно
  }
}
