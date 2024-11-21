const { User } = require('../models'); 
const db = require('../db/config');

describe('User', () => {
  let user;

  beforeAll(async () => {

    await db.sync({ force: true });


    user = await User.create({
      username: 'John Snow',
      password: 'KingOfTheNorth', 
      email: 'JohnSnow@TheWall.com', 
    });
  });

  afterAll(async () => {
 
    await db.drop();
  });

  it('has an id', () => {
    expect(user.id).toBeDefined();
  });
});
