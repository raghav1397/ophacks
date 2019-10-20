const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');

const visitationSchema = new mongoose.Schema({
    visitId: {
        type: String,
        unique: true,
    },
    familyName: {
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
    const count = (await this.distinct('familyName')).length;
    return count;
};

visitationSchema.statics.yearlyCount = async function(familyName, visitationType, dateOfVisit) {
    var cur_date = new Date(dateOfVisit);
    var yr = cur_date.getFullYear();
    var mn = cur_date.getMonth()+1;
    var dt = cur_date.getDate()+2;
    var end_date = new Date(yr.toString()+"-"+mn.toString()+"-"+dt.toString())
    console.log(end_date);
    if(mn<6){
        var start_date = new Date((yr-1).toString()+"-07-01");
    }
    else{
        var start_date = new Date(yr.toString()+"-07-01");
    }
    let cnt = await this.countDocuments({familyName: familyName, visitationType:visitationType, dateOfVisit: {"$gte": start_date, "$lt": end_date}});
    console.log(cnt);
    return cnt;
}

visitationSchema.statics.monthlyCount = async function(familyName, visitationType) {
    var cnt;
    const cur_date = new Date(Date.now());
    var yr = cur_date.getFullYear();
    var mn = cur_date.getMonth();
    var start_date = new Date(yr.toString()+"-"+mn.toString()+"-01");
    await this.countDocuments({familyName: familyName, visitationType:visitationType, dateOfVisit: {"$gte": start_date, "$lt": cur_date}}, function(err, c){
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

const Visitation = mongoose.model('Visitation', visitationSchema);

module.exports = {
    'Visitation' : Visitation
}
