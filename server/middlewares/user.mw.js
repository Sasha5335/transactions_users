const { User } = require('../models');

module.exports.checkSuperhero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const user = await User.findByPk(id);

    if (!user) {
      throw new Error('User not found');
    }
    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
};
