'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      Transaction.belongsToMany(models.User, {
        through: 'powers_to_heroes',
        foreingKey: 'userId',
      });
    }
  }
  Transaction.init(
    {
      transaction: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Transaction',
      tableName: 'transactions',
      underscored: true,
    }
  );
  return Transaction;
};
