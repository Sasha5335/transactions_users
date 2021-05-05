const http = require('http');
const SocketServer = require('socket.io');
const { Transaction } = require('./models');
const app = require('./app');
const { port, SOCKET_EVENTS } = require('./configs');

const server = http.createServer(app);

const cors = {
  origin: 'http://localhost:3000',
};

const io = SocketServer(server, { cors });

io.on('connection', (socket) => {
  console.log('connect to socket');

  socket.on(SOCKET_EVENTS.NEW_TRANSACTION, async (newTransaction) => {
    try {
      const saveTransaction = await Transaction.create(newTransaction);
      io.emit(SOCKET_EVENTS.NEW_TRANSACTION, saveTransaction);
    } catch (err) {
      io.emit(SOCKET_EVENTS.NEW_TRANSACTION_ERROR, err);
    }
  });

  socket.on('disconnect', (reason) => {
    console.log(reason);
  });
});

server.listen(port, () => {
  console.log(`APP started on port ${port}`);
});
