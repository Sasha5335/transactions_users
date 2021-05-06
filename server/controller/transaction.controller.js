const createHttpError = require('http-errors');
const { Transaction } = require('../models');

module.exports.addUserTransaction = async (req, res, next) => {
  try {
    const {
      params: { userId },
      body,
    } = req;

    const transactions = body.transactions.map((name) => ({ name, userId }));

    const createdTransactions = await Transaction.bulkCreate(transactions);

    if (!createdTransactions) {
      return next(createHttpError(400));
    }

    res.send({ data: createdTransactions });
  } catch (err) {
    next(err);
  }
};

module.exports.getUserTransactions = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const transactions = await Transaction.findAll({
      where: { userId },
    });

    res.send({ data: transactions });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteTransaction = async (req, res, next) => {
  try {
    const {
      params: { userId, transactionId },
    } = req;

    const count = await Transaction.destroy({
      where: { userId, id: transactionId },
    });

    if (count === 0) {
      return next(createHttpError(404));
    }

    res.status(200).end();
  } catch (err) {
    next(err);
  }
};
