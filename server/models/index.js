const mongoose = require('mongoose');

const User = require('./user').User;
const Message = require('./message').Message;
const Visitation = require('./visitation').Visitation;
const Household = require('./household').Household;

const DATABASE_URL = "mongodb://hari28395:Ucantcme7@cluster0-shard-00-00-tbt5x.mongodb.net:27017,cluster0-shard-00-01-tbt5x.mongodb.net:27017,cluster0-shard-00-02-tbt5x.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectDb = () => {
  return mongoose.connect(DATABASE_URL);
};

const models = { User, Message, Visitation, Household };

module.exports = { 
  'connectDb':connectDb,
  'models': models 
};

