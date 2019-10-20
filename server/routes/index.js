const user = require('./user').router;
const message = require('./message').router;
const visitation = require('./visitation').router;
const household = require('./household').router;
module.exports = {
  'user' : user,
  'message': message,
  'household': household,
  'visitation': visitation
};
