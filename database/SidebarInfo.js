const sequelize = require('sequelize');
const db = require('./index');

const sidebarInfoSchema = {
  restaurantid: {
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
  crossstreet: {
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
  chef: {
    type: sequelize.STRING,
    allowNull: false,
  },
  catering: {
    type: sequelize.STRING,
    allowNull: false,
  },
  privatefacilities: {
    type: sequelize.STRING,
    allowNull: false,
  },
};

const SidebarInfo = db.sequelize.define('sidebarinfo', sidebarInfoSchema, {
  freezeTableName: true,
});
SidebarInfo.removeAttribute('id');
SidebarInfo.removeAttribute('createdAt');
SidebarInfo.removeAttribute('updatedAt');

const getSidebarInfo = restaurantId => {
  console.log("sidebar", SidebarInfo.findAll({
    where: {
      restaurantId: 10
    }
  }));
  return SidebarInfo.findAll({ 
    where: {
      restaurantId: 10,
    } 
  });
} 

exports.model = SidebarInfo;
exports.getSidebarInfo = getSidebarInfo;
