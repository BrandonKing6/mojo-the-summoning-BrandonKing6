const { Card } = require('../models');
const sequelize = require('../db/config');
describe('Card Model', () => {
    let card;
  
    beforeAll(async () => {
      await sequelize.sync({ force: true });
      // Create a card with valid data
      card = await Card.create({
        name: 'Fire Dragon',
        description: 'A powerful fire-breathing dragon',
        attack: 100,
        defense: 50,
      });
    });
  
    afterAll(async () => {
      await sequelize.drop();
    });
  
    it('should create a card with the correct attributes', () => {
      expect(card.name).toBe('Fire Dragon');
      expect(card.attack).toBe(100);
      expect(card.defense).toBe(50);
    });
  
    it('should fail to create a card without required fields', async () => {
      try {
        await Card.create({
          description: 'This should fail',
        });
      } catch (error) {
        expect(error.name).toBe('SequelizeValidationError');
        expect(error.errors[0].message).toBe('Card.name cannot be null');
      }
    });
  });
  