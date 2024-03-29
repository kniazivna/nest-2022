import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaService } from '../core/prisma.service';

@Module({
  controllers: [PostController],
  providers: [PostService, PrismaService],
  imports: [],
})
export class PostModule {}
