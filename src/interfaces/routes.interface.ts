import { Router } from 'express';
import { Server as SocketIOServer } from 'socket.io';

export interface Routes {
  path?: string;
  router: Router;
  initializeWebSocketEvents?: (io: SocketIOServer) => void;
}
