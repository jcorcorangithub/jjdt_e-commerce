const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const accountSchema = new Schema({
  username: {
      type: String,
      required: [true, 'Please enter your name'],
      unique: true,
  },
  password: {
      type: String,
      required: [true, 'Please enter your password'],
      minlength: [6, 'Your password must be longer than 6 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  // maybe add orders
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

const AccountSchema = model('Account', accountSchema);

module.exports = AccountSchema;