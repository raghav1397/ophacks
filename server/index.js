const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const models = require('./models').models;
const connectDb = require('./models').connectDb;
const routes = require('./routes');

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models
    // me: await models.User.findByUser('rwieruch'),
  };
  next();
});

// Routes
app.use('/users', routes.user);
app.use('/messages', routes.message);

// Start

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);

    createUser("1234");
    setTimeout(deleteUser, 3000);
    setTimeout(retrieveUser, 3000);

  }

  // TODO: Change port
  app.listen(5000, () =>
    console.log(`Example app listening on port 5000!`),
  );
});

const createUser = async (formData) => {
  const user = new models.User({

    username: "formData",
    firstName: "formData",
    lastName: "formData",
    dateOfBirth: new Date('1986-06-05'),
    address: "formData",
    zipCode: 453,
    city: "formData",
    phoneNumber: 123,
    gender: "formData",
    housingType: "formData",
    maritalStatus: "formData",
    ethnicity: ["formData", "formData1"],
    selfStatus: "formData",
    education: "formData",
    primaryLanguage: "formData",
    dentalInsurance: true,
    primaryDoctor: true,
    monthlyIncomeAmount: 9999999999,
    monthlyIncomeType: "formData",
    medicalInsurance: "formData",
    childCareType: "formData",

  });

  const user1 = new models.User({

    username: "formData1",
    firstName: "formData",
    lastName: "formData",
    dateOfBirth: new Date('1986-06-05'),
    address: "formData",
    zipCode: 453,
    city: "formData",
    phoneNumber: 123,
    gender: "formData",
    housingType: "formData",
    maritalStatus: "formData",
    ethnicity: ["formData", "formData1"],
    selfStatus: "formData",
    education: "formData",
    primaryLanguage: "formData",
    dentalInsurance: true,
    primaryDoctor: true,
    monthlyIncomeAmount: 9999999999,
    monthlyIncomeType: "formData",
    medicalInsurance: "formData",
    childCareType: "formData",

  });


  await user.save();
  await user1.save();

};

const retrieveUser = async () => {
  const user = await models.User.findByUserName("formData1");
  return user;
};

const deleteUser = async () => {
  await models.User.deleteByUserName("formData");
};

