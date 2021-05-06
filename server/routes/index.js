const router = require('express').Router();
const userRouter = require('./user');
// const treansactionRouter = require('./transaction');

router.use('/user', userRouter);

module.exports = router;
