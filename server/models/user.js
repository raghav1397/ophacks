const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  address: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  city: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    max: 9999999999,
  },
  gender: {
    type: String,
  },
  housingType: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  ethnicity: {
    type: [String],
  },
  selfStatus: {
    type: [String],
  },
  education: {
    type: String,
  },
  primaryLanguage: {
    type: String,
  },
  dentalInsurance: {
    type: Boolean,
  },
  primaryDoctor: {
    type: Boolean,
  },
  employmentType: {
    type: String,
  },
  monthlyIncomeAmount: {
    type: Number,
  },
  monthlyIncomeType: {
    type: [String],
  },
  medicalInsurance: {
    type: String,
  },
  childCareType: {
    type: String,
  }
});

userSchema.statics.findByUserName = async function(username) {
  let user = await this.findOne({
    username: username,
  });

  if (!user) {
    user = await this.findOne({ email: login });
  }

  return user;
};

userSchema.statics.createUser = async function(username, userObj) {
  console.log(userObj);
  //Count users
  let cnt = await this.countDocuments({username:username});
  if(cnt >= 0){
    await userObj.save();
    return { 
      isError : false,
      msg: "success"
    }
  }
  else{
    console.log("Already UserName Exists");
    return { isError : true}
  }

};

userSchema.statics.checkByUserName = async (username) => {
  var cnt;
  await this.countDocuments({username:username}, function(err, c){
    if(err) 
    {
      cnt = 0;
    }
    else {
      cnt = c;
    }
  });
  return cnt;
};



userSchema.pre('remove', function(next) {
  this.model('Message').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

module.exports = {
  'User' : User
}
