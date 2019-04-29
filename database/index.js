const Sequelize = require('sequelize');
const pginfo = require('./pginfo');

const sequelize = new Sequelize('opentablesidebar', pginfo.user, pginfo.password, {
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => console.log('Database connected.'))
  .catch((error) => console.log(error));

exports.sequelize = sequelize;
