const SidebarInfo = require('./SidebarInfo');
const Overview = require('./Overview');
const dataGenerator = require('./dataGenerator');
const db = require('./index.js');

const insertSampleItems = () => {
  SidebarInfo.model.create(dataGenerator.sampleSidebarItems)
    .then(() => {
      Overview.model.create(dataGenerator.sampleOverviewItems)
        .then(() => {
          db.close()
        });
    });
};

insertSampleItems();
