const express = require('express');
const cors = require('cors');
const { Transaction } = require('./models');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    res.send({ data: transactions });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
