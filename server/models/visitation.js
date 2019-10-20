const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');

const visitationSchema = new mongoose.Schema({
    visitId: {
        type: String,
        unique: true,
    },
    username: {
      type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    visitationType: {
        type: String,
    },
    dateOfVisit: {
        type: Date,
    },
    child: {
        type: Boolean,
    }
});

visitationSchema.statics.totalFamilyCount = async function(visitationType) {
    const count = (await this.distinct('username')).length;
    return count;
};

visitationSchema.statics.yearlyCount = async function(username, visitationType) {
    var cnt;
    const cur_date = new Date(Date.now());
    var yr = cur_date.getFullYear();
    var mn = cur_date.getMonth();
    if(mn<6){
        var start_date = new Date((yr-1).toString()+"-07-01");
    }
    else{
        var start_date = new Date(yr.toString()+"-07-01");
    }
    await this.countDocuments({username: username, visitationType:visitationType, dateOfVisit: {"$gte": start_date, "$lt": cur_date}}, function(err, c){
    if(err)
    {
        cnt = 0;
    }
    else {
        cnt = c;
    }
    });
    return cnt;
}

visitationSchema.statics.monthlyCount = async function(username, visitationType) {
    var cnt;
    const cur_date = new Date(Date.now());
    var yr = cur_date.getFullYear();
    var mn = cur_date.getMonth();
    var start_date = new Date(yr.toString()+"-"+mn.toString()+"-01");
    await this.countDocuments({username: username, visitationType:visitationType, dateOfVisit: {"$gte": start_date, "$lt": cur_date}}, function(err, c){
    if(err)
    {
        cnt = 0;
    }
    else {
        cnt = c;
    }
    });
    return cnt;
}


visitationSchema.pre('remove', function(next) {
    this.model('Message').deleteMany({ visitation: this._id }, next);
  });

// userSchema.statics.deleteByUserName = async function(username) {
//     await this.deleteOne({username: username});
// };

// // userSchema.statics.checkByUserName1 = async function(username) {
// //   await this.findOne({username: username}, function(e, data){
// //     if(e){
// //       console.log("success");
// //       return "success";
// //     }
// //     else{
// //       console.log("failure");
// //       return "failure";
// //     }
// // })};

// userSchema.statics.checkByUserName = async function(username) {
//     var cnt;
//     await this.countDocuments({username:username}, function(err, c){
//     if(err) 
//     {
//         cnt = 0;
//     }
//     else {
//         cnt = c;
//     }
//     });
//     return cnt;
// };



// userSchema.pre('remove', function(next) {
//     this.model('Message').deleteMany({ user: this._id }, next);
// });

const Visitation = mongoose.model('Visitation', visitationSchema);

module.exports = {
    'Visitation' : Visitation
}
    