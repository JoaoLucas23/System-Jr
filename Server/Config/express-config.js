require('dotenv').config();

const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.urlencoded({
  extended: true,
}));

require('./auth');

app.use(express.json());

const userRouter = require('../users/controller/user-controller');
app.use('/users', userRouter);

const carRouter = require('../cars/controller/car-controller');
app.use('/cars', carRouter);

module.exports = app;
