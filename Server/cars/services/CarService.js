const Car = require('../model/Car');

class CarService {
  async createCar(car) {
    await Car.create(car);
  }

  async getAllCars() {
    return await Car.findAll({raw: true});
  }

  async getCarById(id) {
    return await Car.findByPk(id, {raw: true});
  }

  async updateCar(id, body) {
    await Car.update(body, {where: {id: id}});
  }

  async deleteCar(id) {
    await Car.destroy({where: {id: id}});
  }
}

module.exports = new CarService;
