import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { PrismaService } from '../core/prisma.service';

@Module({
  controllers: [CommentController],
  providers: [CommentService, PrismaService],
})
export class CommentModule {}
