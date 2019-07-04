const consola = require('consola');

const server = require('http').createServer();

const { port } = require('./config');

server.listen(port, (): void => {
  consola.success('Server running...');
  consola.info(`http://localhost:${server.address().port}\n`);
});
