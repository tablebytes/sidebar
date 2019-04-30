const sequelize = require('sequelize');
const db = require('./index');

const overviewSchema = {
  restaurantid: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: sequelize.NUMBER,
    allowNull: false,
  },
  reviewcount: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  costrange: {
    type: sequelize.ARRAY(sequelize.INTEGER),
    allowNull: false,
  },
  cuisine: {
    type: sequelize.STRING,
    allowNull: false,
  },
  tags: {
    type: sequelize.ARRAY(sequelize.STRING),
    allowNull: false,
  },
  description: {
    type: sequelize.STRING,
    allowNull: false,
  },
};

const Overview = db.sequelize.define('overview', overviewSchema, {
  freezeTableName: true,
});
Overview.removeAttribute('id');
Overview.removeAttribute('createdAt');
Overview.removeAttribute('updatedAt');

const getOverview = restaurantId => {
  return Overview.findAll({ 
    where: {
      restaurantId: 10,
    } 
  });
} 

exports.model = Overview;
exports.getOverview = getOverview;
