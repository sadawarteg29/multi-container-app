var Sequelize = require('sequelize')
var env = 'dev'
var config = require('../config.json')[env]
const Op = Sequelize.Op;
var url = require('url');
var env = "dev";
var password = config.password ? config.password : null;
var sequelize = new Sequelize(
  config.database,
  config.user,

  config.password, {
    logging: console.log,
    host: 'multi-container-app-database.ctyqxss3tpe4.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  }
);


exports.User = sequelize.define('users', {

  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.STRING
  },
  updatedAt: {
    type: Sequelize.STRING
  }
})
