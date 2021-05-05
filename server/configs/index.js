module.exports = {
  port: 5000,
  db: {
    development: {
      hostName: 'localhost',
      port: 27017,
      dbName: 'transaction',
    },
  },

  SOCKET_EVENTS: {
    NEW_TRANSACTION: 'NEW_TRANSACTION',
    NEW_TRANSACTION_ERROR: 'NEW_TRANSACTION_ERROR',
  },
};
