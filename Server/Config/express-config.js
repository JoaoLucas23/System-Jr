require('dotenv').config();

const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());

const userRouter = require('../users/controller/user-controller');
app.use('/users', userRouter);

const carRouter = require('../cars/controller/car-controller');
app.use('/cars', carRouter);

module.exports = app;
