const Router = require('express');
const models = require('../models').models;

const router = Router();

router.get('/', async (req, res) => {
  const visitations = await req.context.models.Visitation.find();
  return res.send(visitations);
});

router.post('/create', async (req, res) => {
  const age = await models.User.getAge("formData","formData","formData");
  var chld=false;
  if(age<18) {chld=true};
  var allow=false;
  if(req.body.visitationType === "AHCCCS"){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "WIC"){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "Food Bank"){
    // monthly twice
    var cnt = await models.Visitation.monthlyCount("formData","AHCCCS");
    if(cnt <= 2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "FTF"){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "Diapers"){
    // yearly thrice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=3){
      allow=true;
    }
  }
  else if(req.body.visitationType === "Medical"){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "Dental"){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "Immunizations"){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "Vision and Hearing"){
    // yearly twice
    var cnt = await models.Visitation.yearlyCount("formData","AHCCCS");
    if(cnt<=2){
      allow=true;
    }
  }
  if(allow){
    const visit = new models.Visitation(req.body);
    await visit.save();
  }
})

// router.get('/:userId', async (req, res) => {
//   const user = await req.context.models.User.findById(
//     req.params.userId,
//   );
//   return res.send(user);
// });


module.exports = { 'router' : router };
