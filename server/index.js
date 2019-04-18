const express = require('express');
const bodyParser = require('body-parser');
const SidebarInfo = require('../database/SidebarInfo');
const Overview = require('../database/Overview');
const path = require('path');
const cors = require('cors');

const port = 3003;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/restaurants/:id', express.static(path.join(__dirname, '/../client/dist')));

app.post('/api/restaurants/info/new', (req, res) => {
  SidebarInfo.model.find({ restaurantId: req.body.restaurantId })
  .then(info => {
    if (info.length > 0) {
      console.log('Restaurant id is taken.');
    } else {
      SidebarInfo.model.create(req.body)
        .then(() => console.log('Successly added new restaurant information!'))
        .catch((error) => console.log(error));
    }
  });
});

app.post('/api/restaurants/overview/new', (req, res) => {
  Overview.model.find({ restaurantId: req.body.restaurantId })
  .then(info => {
    if (info.length > 0) {
      console.log('Restaurant id is taken.');
    } else {
      Overview.model.create(req.body)
        .then(() => console.log('Successly added new restaurant overview!'))
        .catch((error) => console.log(error));
    }
  });
});

app.get('/api/restaurants/:id/info', (req, res) => {
  SidebarInfo.getSidebarInfo(req.params.id)
    .then(info => {
      res.send(info);
    });
});

app.get('/api/restaurants/:id/overview', (req, res) => {
  Overview.getOverview(req.params.id)
    .then(overview => {
      SidebarInfo.getSidebarInfo(req.params.id)
        .then(info => {
          overview.cuisine = info.cuisines.split(',')[0];
          res.send(overview);
        })
    })
});

app.put('/api/restaurants/:id/info/update', (req, res) => {
  SidebarInfo.model.updateOne({ restaurantId: req.params.id}, req.body)
    .then(() => console.log('Sucessfully updated restaurant information.'))
    .catch(err => {
      console.log(err);
    });
});

app.put('/api/restaurants/:id/overview/update', (req, res) => {
  Overview.model.find({ restaurantId: req.body.restaurantId })
  .then(info => {
    if (info.length > 0) {
      console.log('Restaurant does not exist.');
    } else {
      Overview.model.updateOne({ restaurantId: req.params.id}, req.body)
        .then(() => console.log('Sucessfully updated restaurant overview.'))
        .catch(err => {
          console.log(err);
        });
    }
  });
});

// Delete
  // Overview
  // Sidebar

const server = app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

module.exports = app;
module.exports.server = server;