import { Injectable } from '@nestjs/common';
import { Prisma, Post } from '@prisma/client';

import { PrismaService } from '../core/prisma.service';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  getAll(): Promise<Post[]> {
    return this.prismaService.post.findMany();
  }

  getById(postId: string): Promise<Post> {
    return this.prismaService.post.findUnique({
      where: { id: Number(postId) },
    });
  }

  getByIdAndComments(postId: string): Promise<Post> {
    return this.prismaService.post.findUnique({
      where: { id: Number(postId) },
      include: { comments: true },
    });
  }

  createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prismaService.post.create({ data });
  }

  updatePost(postData: Prisma.PostUpdateInput, postId: string): Promise<Post> {
    return this.prismaService.post.update({
      where: { id: Number(postId) },
      data: {
        title: postData.title,
        content: postData.content,
        published: postData.published,
      },
    });
  }

  deletePost(postData: Prisma.PostWhereInput, postId: string): Promise<Post> {
    return this.prismaService.post.delete({
      where: { id: Number(postId) },
    });
  }
}
