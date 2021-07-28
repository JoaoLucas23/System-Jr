require('dotenv').config();

const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors({
  origin: process.env.APP_URL,
  credentials: true,
}));

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

const errorHandler = require('../middlewares/error-handler');
app.use(errorHandler);

module.exports = app;
