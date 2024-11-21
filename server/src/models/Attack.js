const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Attack = sequelize.define('Attack', {
  attackName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  damage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Attack;
