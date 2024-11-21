const { Deck } = require('../models');
const sequelize = require('../db/config');

describe('Deck Model', () => {
  let deck;
  beforeAll(async () => {
    await sequelize.sync({ force: true });

    deck = await Deck.create({
      name: 'Fire Deck',
      description: 'A deck focused on fire cards.',
    });
  });

  afterAll(async () => {
    await sequelize.drop();
  });

  it('should create a deck with the correct attributes', () => {
    expect(deck.name).toBe('Fire Deck');
    expect(deck.description).toBe('A deck focused on fire cards.');
  });

  it('should fail to create a deck without a name', async () => {
    try {
      await Deck.create({
        description: 'This should fail because name is required.',
      });
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError');
      expect(error.errors[0].message).toBe('Deck.name cannot be null');
    }
  });
  


  it('should update a deck correctly', async () => {
    await deck.update({ description: 'Updated description for the fire deck' });

    const updatedDeck = await Deck.findByPk(deck.id);
    expect(updatedDeck.description).toBe('Updated description for the fire deck');
  });

  it('should delete a deck', async () => {
    await deck.destroy();
    const deletedDeck = await Deck.findByPk(deck.id);
    expect(deletedDeck).toBeNull();
  });
});
