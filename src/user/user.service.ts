import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { PrismaService } from '../core/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  getAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  getById(userId: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id: Number(userId) },
    });
  }

  getByEmail(userEmail: string): Promise<User> {
    return this.prismaService.user.findFirst({
      where: { email: userEmail },
    });
  }

  getByIdAndPosts(userId: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id: Number(userId) },
      include: { posts: true },
    });
  }

  getByIdAndComments(userId: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id: Number(userId) },
      include: { Comment: true },
    });
  }

  getByIdAndPostsAndComments(userId: string): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { id: Number(userId) },
      include: { posts: true, Comment: true },
    });
  }

  createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({ data });
  }

  updateUser(userData: Prisma.UserUpdateInput, userId: string): Promise<User> {
    return this.prismaService.user.update({
      where: { id: Number(userId) },
      data: { name: userData.name, city: userData.city }, // а можна просто прописати data:userData, якщо ми не знаємо, які дані будуть оновлювати, си тоді потрібно кожне поле прописувати???
    });
  }

  deleteUser(userId: string): Promise<User> {
    return this.prismaService.user.delete({ where: { id: Number(userId) } });
  }
}
