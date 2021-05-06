const createError = require('http-errors');
const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const createdUser = await User.create(body);

    res.status(201).send(createdUser);
  } catch (err) {
    next(err);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const user = await User.findByPk(id);

    if (!user) {
      return next(createError(404, 'User not found'));
    }

    res.status(200).send(user);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const { userId } = req;

    const users = await User.findAll({
      ...pagination,
    });

    if (!users.length) {
      return next(createError(404, 'Users not found'));
    }

    res.send({ data: users });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const rowsCount = await User.destroy({ where: { id } });

    if (rowsCount !== 1) {
      return next(createError(404, 'User not found'));
    }

    res.send({ data: id });
  } catch (err) {
    next(err);
  }
};
