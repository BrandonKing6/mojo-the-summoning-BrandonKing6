const User = require('./User');
const Deck = require('./Deck');
const Card = require('./Card');
const Attack = require('./Attack');

Deck.hasMany(Card);  
Card.belongsTo(Deck);

Card.hasMany(Attack);
Attack.belongsTo(Card);


const sequelize = require('../db/config');  

module.exports = {
  User,
  Deck,
  Card,
  Attack,
  sequelize,
};
