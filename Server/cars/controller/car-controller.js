const router = require('express').Router();
const CarService = require('../services/CarService');

router.post('/', async (req, res) => {
  try {
    const car = {
      model: req.body.model,
      marca: req.body.marca,
      cor: req.body.cor,
      image: req.body.image,
      ano: req.body.ano,
      price: req.body.price,
      km: req.body.km,
      observation: req.body.observation,
      user: req.body.user,
    };

    await CarService.createCar(car);

    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const cars = await CarService.getAllCars();
    res.status(200).json(cars);
  } catch (error) {
    console.log(error);
  }
});

router.get('/car/:id', async (req, res) => {
  try {
    const carId = req.params.id;
    const car = await CarService.getCarById(carId);

    res.status(200).json(car);
  } catch (error) {
    console.log(error);
  }
});

router.put('/car/:id', async (req, res) => {
  try {
    const carId = req.params.id;
    await CarService.updateCar(carId, req.body);

    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

router.delete('/car/:id', async (req, res) => {
  try {
    const carId = req.params.id;
    await CarService.deleteCar(carId);

    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

module.exports= router;
