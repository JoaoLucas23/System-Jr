const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');

const Car = sequelize.define('Cars', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  km: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  observation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Car.sync({alter: false, force: false})
  .then(() => console.log('A tabela Cars foi (re)criada'))
  .catch((error) => console.log(error));

module.exports = Car;
