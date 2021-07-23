const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const accountSchema = new Schema({
  name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
  },
  username: {
      type: String,
      required: true,
      unique: true,
  },
  password: {
      type: String,
      required: true,
      minlength: 5,
  },
});

// set up pre-save middleware to create password
accountSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  accountSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const AccountSchema = model('Account', accountSchema)

module.exports = AccountSchema;