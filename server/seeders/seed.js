const db = require('../config/connection');
const { account, product } = require('../models');

// check to see if we need this //////
db.once('open', async () => {
    try {
        await account.deleteMany({});
        await product.deleteMany({});
        await account.create(accountSeeds);
    
        console.log('all done!');
        process.exit(0);
      } catch (err) {
        throw err;
      }
});