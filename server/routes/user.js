const userRouter = require('express').Router();
const transactionRouter = require('./transaction');
const userController = require('../controller/user.controller');
// const paginate = require('../middlewares/paginate.mw');
// const { checkSuperhero } = require('../middlewares/superhero.mw');

userRouter
  .route('/')
  .post(userController.createUser)
  .get(userController.getAllUsers);

userRouter
  .route('/:id')
  .get(userController.getUser)
  .delete(userController.deleteUser);

userRouter.use('/:id/transactions/', transactionRouter);

module.exports = userRouter;
