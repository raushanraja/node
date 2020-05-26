// importing packages
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');


// Creating schema
const {Schema} = mongoose;

const UsersSchema = new Schema({
    email:String,
    hash:String,
    salt:String
});


// Method to set hash and salt based on the password in database
UsersSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  };


// Method to Validate on password
UsersSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
  };

//  Method to generate jsonWebToken
UsersSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
  
    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'raushan');
  }

// Method to authenticate JSON -- What is this

UsersSchema.methods.toAuthJSON = function() {
    return {
      _id: this._id,
      email: this.email,
      token: this.generateJWT(),
    };
  };

// Export mongoose model with schema defined above
mongoose.model('Users',UsersSchema);