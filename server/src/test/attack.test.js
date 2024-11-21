const { Attack } = require('../models');
const sequelize = require('../db/config');
describe('Attack Model', () => {
  let attack;

  beforeAll(async () => {
    await sequelize.sync({ force: true });

    attack = await Attack.create({
      attackName: 'Fireball',
      damage: 50,
    });
  });

  afterAll(async () => {
    await sequelize.drop();
  });

  it('should create an attack with the correct attributes', () => {
    expect(attack.attackName).toBe('Fireball');
    expect(attack.damage).toBe(50);
  });

  it('should fail to create an attack without attackName', async () => {
    try {
      await Attack.create({
        damage: 30, 
      });
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError'); 
      expect(error.errors[0].message).toBe('Attack.attackName cannot be null');
    }
  });

  it('should fail to create an attack without damage', async () => {
    try {
      await Attack.create({
        attackName: 'Lightning',
      });
    } catch (error) {
      expect(error.name).toBe('SequelizeValidationError');
      expect(error.errors[0].message).toBe('Attack.damage cannot be null');
    }
  });

  it('should update an attack correctly', async () => {
    await attack.update({ damage: 75 });

    const updatedAttack = await Attack.findByPk(attack.id);
    expect(updatedAttack.damage).toBe(75);
  });

  it('should delete an attack', async () => {
    await attack.destroy();

    const deletedAttack = await Attack.findByPk(attack.id);
    expect(deletedAttack).toBeNull();
  });
});
