const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://localhost/openTableSidebar');

module.exports = sequelize;
