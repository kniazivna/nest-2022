import { Module } from '@nestjs/common';

import { NotchatService } from './notchat.service';
import { NotchatGateway } from './notchat.gateway';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [AuthService],
  providers: [NotchatService, NotchatGateway],
})
export class NotchatModule {}
