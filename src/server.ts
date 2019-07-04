import consola from 'consola';
import http from 'http';
import socket from 'socket.io';
import { AddressInfo } from 'net';

import { port } from './config';
import module from './module';

const server = http.createServer();
const io = socket(server);

server.listen(port, (): void => {
  consola.success('Server running');

  try {
    const info = server.address() as AddressInfo;
    consola.info(`Access ${info.address}:${info.port}`);
  } catch (err) {
    consola.error(server.address());
  }
});

module(io);
