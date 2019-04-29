const sequelize = require('sequelize');
const db = require('./index');

const sidebarInfoSchema = {
  restaurantId: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  address: {
    type: sequelize.STRING,
    allowNull: false,
  },
  neighborhood: {
    type: sequelize.STRING,
    allowNull: false,
  },
  crossStreet: {
    type: sequelize.STRING,
    allowNull: false,
  },
  parking: {
    type: sequelize.STRING,
    allowNull: false,
  },
  dining: {
    type: sequelize.STRING,
    allowNull: false,
  },
  cuisines: {
    type: sequelize.STRING,
    allowNull: false,
  },
  hours: {
    type: sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: sequelize.STRING,
    allowNull: false,
  },
  website: {
    type: sequelize.STRING,
    allowNull: false,
  },
  payment: {
    type: sequelize.STRING,
    allowNull: false,
  },
  dress: {
    type: sequelize.STRING,
    allowNull: false,
  },
  additional: {
    type: sequelize.STRING,
    allowNull: false,
  },
  chef: {
    type: sequelize.STRING,
    allowNull: false,
  },
  catering: {
    type: sequelize.STRING,
    allowNull: false,
  },
  privateFacilities: {
    type: sequelize.STRING,
    allowNull: false,
  },
};

const SidebarInfo = db.sequelize.define('SidebarInfo', sidebarInfoSchema);

const getSidebarInfo = restaurantId => {
  return SidebarInfo.findAll({ restaurantId });
} 

exports.model = SidebarInfo;
exports.getSidebarInfo = getSidebarInfo;
