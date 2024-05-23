const Sequelize = require('sequelize')

const sequelize = require('../utill/database')

const Items = sequelize.define('Item', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  itemname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.STRING
  }
});

module.exports = Items;
