import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server/*, Socket*/ } from 'socket.io';
//import { UnauthorizedException } from "@nestjs/common";

import { AuthService } from '../auth/auth.service';

@WebSocketGateway({
  pingTimeout: 60000,
})
export class NotchatGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly authService: AuthService) {}

  @SubscribeMessage('join')
  async joinRoom(/*client: Socket,*/ data: { token: string }) {
    const userId = await this.authService.getVerifiedUseId(data.token);
    // if(!userId) {
    //   client.emit('user-no-uth',
    //     {
    //       statusCode: 401,
    //       error: 'No auth'
    //     })
    // }

    console.log(userId);

    // return 'yes';
  }
}
