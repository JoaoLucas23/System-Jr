const sequelize = require('../../database/index');
const {DataTypes} = require('sequelize');
const Car = require('../../cars/model/Car');

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM,
    values: ['admin', 'user'],
    allowNull: false,
  },
});

User.hasMany(Car, {
  onDelete: 'cascade',
});
Car.belongsTo(User);

User.sync({alter: false, force: false})
  .then(() => console.log('A tabela Users foi (re)criada'))
  .catch((error) => console.log(error));

Car.sync({alter: false, force: false})
  .then(() => console.log('A tabela Cars foi (re)criada'))
  .catch((error) => console.log(error));

module.exports = User;
