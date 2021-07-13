const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');

const Car = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
  },
});

Car.sync({alter: false, force: false})
  .then(() => console.log('A tabela Cars foi (re)criada'))
  .catch((error) => console.log(error));

module.exports = Car;
