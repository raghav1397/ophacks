const mongoose = require('mongoose');

const User = require('./user').User;
const Message = require('./message').Message;

const DATABASE_URL = "mongodb://localhost:27017";
const connectDb = () => {
  return mongoose.connect(DATABASE_URL);
};

const models = { User, Message };

module.exports = { 
  'connectDb':connectDb,
  'models': models 
};

