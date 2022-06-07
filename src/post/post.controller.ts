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

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.postService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.postService.getById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createPost(@Body() postDto: CreatePostDto) {
    return this.postService.createPost(postDto);
  }

  @Patch()
  updatePost(@Body() postDto: CreatePostDto, @Param('id') id: string) {
    return postDto;
  }

  @Delete()
  deleteUser(@Param('id') id: string) {
    return this.postService.deletePost(id);
  }
}
