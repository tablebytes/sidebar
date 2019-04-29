const sequelize = require('sequelize');
const db = require('./index');

const overviewSchema = {
  restaurantId: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  reviewCount: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  costRange: {
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

const Overview = db.sequelize.define('Overview', overviewSchema);

const getOverview = restaurantId => {
  return Overview.findAll({ restaurantId });
} 

exports.model = Overview;
exports.getOverview = getOverview;
