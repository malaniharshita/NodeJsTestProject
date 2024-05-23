const Sequelize = require('sequelize');

const sequelize = new Sequelize('item-app', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
