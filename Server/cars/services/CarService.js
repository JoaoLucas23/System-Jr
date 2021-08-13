const Car = require('../model/Car');
const permissionError = require('../../errors/PermissionError');
const QueryError = require('../../errors/QueryError');

class CarService {
  async createCar(car) {
    await Car.create(car);
  }

  async getAllCars() {
    const result = await Car.findAll({raw: true, attributes:
      {
        exclude: ['updatedAt'],
      },
    });
    return result;
  }

  async getLastThreeCars() {
    const result = await Car.findAll(
      {limit: 3,
        order: [['createdAt', 'DESC']],
        exclude: ['updatedAt'],
      });
    return result;
  }

  async getUserCars(id) {
    const result = await Car.findAll(
      {
        where: {UserId: id},
      },
    );
    return result;
  }

  async getCarById(id) {
    const car = await Car.findByPk(id, {raw: true, attributes:
      {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!car) {
      throw new QueryError(`Não foi encontrado nenhum carro com o ID ${id}`);
    }

    return car;
  }

  async updateCar(id, reqUserId, reqUserRole, body) {
    const car = await Car.findByPk(id, {raw: true});
    if (!car) {
      throw new QueryError(`Não foi encontrado nenhum carro com o ID ${id}`);
    }

    const isAdmin = reqUserRole === 'admin';
    const isProductOwner = reqUserId == car.UserId;

    if (!isAdmin && !isProductOwner) {
      throw new permissionError(
        'Você não tem permição para editar esse carro!');
    }

    await Car.update(body, {where: {id: id}});
  }

  async deleteCar(id, reqUserId, reqUserRole) {
    const car = await Car.findByPk(id);

    const isAdmin = reqUserRole === 'admin';
    const isProductOwner = reqUserId == Car.UserId;

    if (!isAdmin && !isProductOwner) {
      throw new permissionError(
        'Você não tem permição para deletar esse carro!');
    }

    await car.destroy();
  }
}

module.exports = new CarService;
