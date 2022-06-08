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

import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('comments')
@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @ApiOperation({ summary: 'get all comments' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: [
        {
          id: 15,
          text: 'Some text',
          published: false,
          authorId: 1,
          postId: 2,
        },
      ],
    },
  })
  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.commentService.getAll();
  }

  @ApiOperation({ summary: 'get one comment by id' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 139,
        text: 'Some text',
        published: false,
        authorId: 48,
        postId: 852,
      },
    },
  })
  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.commentService.getById(id);
  }

  @ApiOperation({ summary: 'create comment' })
  @ApiOkResponse({
    status: 201,
    schema: {
      example: {
        id: 17,
        text: 'Some text',
        published: false,
        authorId: 25,
        postId: 39,
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createComment(@Body() commentDto: CreateCommentDto) {
    return this.commentService.createComment(commentDto);
  }

  @ApiOperation({ summary: 'update comment' })
  @ApiOkResponse({
    status: 200,
    schema: {
      example: {
        id: 63,
        text: 'Some updated text',
        published: true,
        authorId: 29,
        postId: 452,
      },
    },
  })
  @Patch('/:id')
  updateComment(
    @Body() commentData: UpdateCommentDto,
    @Param('id') id: string,
  ) {
    return this.commentService.updateComment(commentData, id);
  }

  @ApiOperation({ summary: 'delete user' })
  @ApiOkResponse({
    status: 204,
    schema: {
      example: {
        id: 3369,
        text: 'Deleted text',
        published: true,
        authorId: 2963,
        postId: 274,
      },
    },
  })
  @Delete('/:id')
  deleteComment(commentDto: CreateCommentDto, @Param('id') id: string) {
    return this.commentService.deleteComment(commentDto, id);
  }
}
