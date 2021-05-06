const transactionRouter = require('express').Router({ mergeParams: true });
const transactionController = require('../controller/transaction.controller');
const paginate = require('../middlewares/paginate.mw');

transactionRouter
  .route('/')
  .post(transactionController.addUserTransaction)
  .get(paginate, transactionController.getUserTransactions);

transactionRouter
  .route('/:transactionId')
  .delete(transactionController.deleteTransaction);

module.exports = transactionRouter;
