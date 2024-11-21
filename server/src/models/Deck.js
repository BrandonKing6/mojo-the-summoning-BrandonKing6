const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Deck = sequelize.define('Deck', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Deck;
