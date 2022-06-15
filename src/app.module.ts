import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { AuthModule } from './auth/auth.module';
import { NotchatModule } from './notchat/notchat.module';

@Module({
  imports: [UserModule, PostModule, CommentModule, AuthModule, NotchatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
