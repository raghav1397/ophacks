const Router = require('express');
const models = require('../models').models;
const uuidv1 = require('uuid/v1');

const router = Router();

router.get('/', async (req, res) => {
  const visitations = await req.context.models.Visitation.find();
  return res.send(visitations);
});

var flag=false;

router.post('/create', async (req, res) => {
  const familyName = req.body.familyName;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  var checkedIn = true;
  let age = await models.User.getAge(familyName,firstName,lastName);
  let cnt;
  if(age && age.isError==true){
    //error response
    res.status(500).send(JSON.stringify(age));
  }
  var chld=false;
  if(age<18) {chld=true};
  var allow=false;
  if(req.body.visitationType === "AHCCCS"){
    // yearly twice
    cnt = await models.Visitation.yearlyCount(familyName,"AHCCCS", req.body.dov);
    if(cnt<2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "WIC"){
    // yearly twice
    cnt = await models.Visitation.yearlyCount(familyName,"WIC", req.body.dov);
    if(cnt<2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "Food Bank"){
    // monthly twice
    cnt = await models.Visitation.monthlyCount(familyName,"Food Bank", req.body.dov);
    if(cnt < 2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "FTF"){
    // yearly twice
    cnt = await models.Visitation.yearlyCount(familyName,"FTF", req.body.dov);
    if(cnt<2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "Diapers"){
    // yearly thrice
    cnt = await models.Visitation.yearlyCount(familyName,"Diapers", req.body.dov);
    if(cnt<3){
      allow=true;
    }
  }
  else if(req.body.visitationType === "Medical"){
    // yearly twice
    cnt = await models.Visitation.yearlyCount(familyName,"Medical", req.body.dov);
    if(cnt<2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "Dental"){
    // yearly twice
    cnt = await models.Visitation.yearlyCount(familyName,"Dental", req.body.dov);
    if(cnt<2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "Immunizations"){
    // yearly twice
    cnt = await models.Visitation.yearlyCount(familyName,"Immunizations", req.body.dov);
    if(cnt<2){
      allow=true;
    }
  }
  else if(req.body.visitationType === "Vision and Hearing"){
    // yearly twice
    cnt = await models.Visitation.yearlyCount(familyName,"Vision and Hearing", req.body.dov);
    if(cnt<2){
      allow=true;
    }
  }
  if(allow){
    req.body.dateOfVisit = req.body.dov;
    req.body.visitId= uuidv1();
    req.body.checkedIn=false;
    const visit = new models.Visitation(req.body);
    let isSaved = await visit.save();
    if(isSaved){
      res.status(200).send({visitId: req.body.visitId})
    }
  }
});

router.post('/update', async (req, res) => {
  console.log(flag);
  if(!flag){
    console.log(req.body);
    var body = JSON.parse(req.body);
    var doc = await models.Visitation.findOne({visitId:body.visitId});
    console.log(body.visitId);
    const familyName = doc['familyName'];
    const firstName = doc['firstName'];
    const lastName = doc['lastName'];
    const dateOfVisit = doc['dateOfVisit'];
    const child = doc['child'];
    const visitationType = doc['visitationType'];
    var checkedIn = true;
    console.log("Update");
    await models.Visitation.deleteOne({visitId:req.body.visitId});
    const visit = new models.Visitation({
      visitId: req.body.visitId,
      firstName: firstName,
      lastName: lastName,
      familyName: familyName,
      visitationType: visitationType,
      dateOfVisit: dateOfVisit,
      child: child,
      checkedIn: checkedIn
    });
      
    let isSaved = await visit.save();
    if(isSaved){
      res.status(200).send({visitId: req.body.visitId})
    }
    flag=true;
  }
});


module.exports = { 'router' : router };
