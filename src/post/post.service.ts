import { Delete, Injectable } from "@nestjs/common";
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  private _posts = [];

  getAll() {
    return this._posts;
  }

  getById(id: string) {
    return this._posts.find((user) => user.id === id);
  }

  createPost(postDto: CreatePostDto) {
    this._posts.push({
      ...postDto,
      id: new Date().valueOf(),
    });
    return postDto;
  }

  deletePost(id: string) {
    this._posts.filter((post) => post.id !== id);
  }
}
