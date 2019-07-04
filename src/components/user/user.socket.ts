import { Server } from 'socket.io';

export default (io: Server): void => {
  io.of('/user')
    .on('connection', (socket): void => {
      socket.on('test', (data): void => {
        console.log(`${socket.id} sended:\n${data}`);
      });
    });
};
