const mongoose = require('mongoose');

const householdSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  relationship: {
      type: String
  },
  childSpecial: {
      type: String
  },
  dateOfBirth: {
    type: Date,
  },
  gender: {
    type: String,
  },
  ethnicity: {
    type: [String],
  },
  selfStatus: {
    type: [String],
  },
  primaryLanguage: {
    type: String,
  },
  nameOfSchool: {
      type: String
  },
  dentalInsurance: {
    type: Boolean,
  },
  primaryDoctor: {
    type: Boolean,
  },
  medicalInsurance: {
    type: String,
  }
});

householdSchema.statics.findByUserName = async function(username, firstName, lastName) {
  let member = await this.findOne({
    username: username,
    firstName: firstName,
    lastName: lastName
  });

  return member;
};

householdSchema.pre('remove', function(next) {
  this.model('Message').deleteMany({ household: this._id }, next);
});

const Household = mongoose.model('Household', householdSchema);

module.exports = {
  'Household' : Household
}