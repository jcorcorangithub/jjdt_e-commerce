const db = require('../config/connection');
const { account } = require('../models');
const accountSeeds = require('./accountSeeds.json');

// check to see if we need this //////
db.once('open', async () => {
    try {
        await account.deleteMany({});
        await account.create(accountSeeds);
    
        console.log('all done!');
        process.exit(0);
      } catch (err) {
        throw err;
      }
});