const dotenv = require('dotenv');
const { ItemModel } = require('../../models/ItemModel');
const { dbConnect, dbDisconnect } = require('../databaseConnectionManager');

dotenv.config();

async function dbSeed() {
  const itemsToSeed = [
    {
      name: 'Health Potion',
      category: 'Consumable',
      stockQuantity: 10,
    },
    {
      name: 'Iron Sword',
      category: 'Weapon',
      stockQuantity: 3,
    },
    {
      name: 'Leather Armour',
      category: 'Armour',
      stockQuantity: 7,
    },
    {
      name: 'Mana Potion',
      category: 'Consumable',
      stockQuantity: 2,
    },
  ];

  await ItemModel.deleteMany({});
  await ItemModel.insertMany(itemsToSeed);

  console.log('Database seeded');
}

dbConnect()
  .then(async () => {
    await dbSeed();
    await dbDisconnect();
  })
  .catch((error) => {
    console.error('Seeding error:', error);
  });
