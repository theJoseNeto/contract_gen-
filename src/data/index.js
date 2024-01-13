const Sequelize = require("sequelize");
const dbConfig = require('../config/database');

const connnection = new Sequelize(dbConfig);
module.exports = connnection;
    