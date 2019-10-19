const user = require('./user').router;
const message = require('./message').router;
module.exports = {
  'user' : user,
  'message': message,
};
