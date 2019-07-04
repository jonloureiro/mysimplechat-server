import { Server } from 'socket.io';

import user from './components/user/user.socket';

export default (io: Server): void => {
  user(io);
};
