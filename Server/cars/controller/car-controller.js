const router = require('express').Router();
const {jwtMiddleware} = require('../../middlewares/auth-middlewares');
const CarService = require('../services/CarService');
const objectFilter = require('../../middlewares/object-filter');
const productValidate = require('../../middlewares/car-validator');

router.post('/',
  jwtMiddleware,
  objectFilter(
    'body',
    ['model', 'brand', 'color', 'year', 'image', 'price',
      'km', 'description', 'condition']),
  productValidate('createCar'),
  async (req, res, next) => {
    try {
      const car = {
        UserId: req.user.id,
        model: req.body.model,
        brand: req.body.brand,
        color: req.body.color,
        year: req.body.year,
        image: req.body.image,
        price: req.body.price,
        km: req.body.km,
        description: req.body.description,
        condition: req.body.condition,
      };

      await CarService.createCar(car);

      res.status(201).end();
    } catch (error) {
      next(error);
    }
  });

router.get('/', jwtMiddleware,
  async (req, res, next) => {
    try {
      const cars = await CarService.getAllCars();
      res.status(200).json(cars);
    } catch (error) {
      next(error);
    }
  });

router.get('/last-cars', jwtMiddleware,
  async (req, res, next) => {
    try {
      const cars = await CarService.getLastThreeCars();
      res.status(200).json(cars);
    } catch (error) {
      next(error);
    }
  });


router.get('/car/:id', jwtMiddleware,
  async (req, res, next) => {
    try {
      const carId = req.params.id;
      const car = await CarService.getCarById(carId);

      res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  });

router.put('/car/:id', jwtMiddleware,
  objectFilter(
    'body',
    ['model', 'brand', 'color', 'year', 'image', 'price',
      'km', 'description', 'condition']),
  productValidate('updateCar'),
  async (req, res, next) => {
    try {
      const carId = req.params.id;
      await CarService.updateCar(carId, req.user.id, req.user.role, req.body);

      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });

router.delete('/car/:id', jwtMiddleware,
  async (req, res, next) => {
    try {
      const carId = req.params.id;
      await CarService.deleteCar(carId, req.user.id, req.user.role);

      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });

module.exports= router;
