const Router = require('express');
const models = require('../models').models;
const router = Router();

router.get('/', async (req, res) => {
  if(req.query.userName){
    const user = await req.context.models.User.findByUserName(
      req.query.userName
    );
    return res.send(user);
  }
  const users = await req.context.models.User.find();
  return res.status(200).send(users);
});

router.post('/', async (req, res) => {
  const formData = req.body.formData;
  const userModel = new models.User({
    username: "formData25",
    firstName: formData.firstName,
    lastName: formData.lastName,
    dateOfBirth: new Date(),
    address: formData.addressLine1,
    zipCode: 123,
    phoneNumber: 1234567890,
    gender: formData.gender,
    housingType: formData.housingType,
    maritalStatus: formData.maritalStatus,
    ethnicity: ["formData", "formData1"],
    selfStatus: "formData",
    education: formData.highestEducation,
    primaryLanguage: formData.primaryLanguage,
    dentalInsurance: true,
    primaryDoctor: true,
    monthlyIncomeAmount: 10000,
    monthlyIncomeType: formData.incomeType,
    medicalInsurance: formData.medicalInsType,
    childCareType: formData.childCareType,

  });
  const user = await req.context.models.User.createUser(req.body.formData.username,userModel);
  if(user && user.isError){
    return res.status(500).send("Error in creating user. Contact Office");
  }else if(user){
    res.status(200).send("success");
  }
})


module.exports = { 'router' : router };
