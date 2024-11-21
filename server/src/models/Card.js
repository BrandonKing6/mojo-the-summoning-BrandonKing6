// server/src/models/Card.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Card = sequelize.define('Card', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  attack: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  defense: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Card;
