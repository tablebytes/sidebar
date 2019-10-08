const faker = require('faker');
const fs = require('fs');

const totalItems = 10000000;
const randRange = (min, max) => (Math.floor(Math.random() * (max + 1 - min)) + min);

const populateItems = (restaurantId) => {
    let newItem = {};

    newItem.restaurantId = restaurantId;
    newItem.address = [faker.address.streetAddress(), faker.address.city(), faker.address.stateAbbr()].join(' ');
    newItem.neighborhood = faker.address.citySuffix();
    newItem.neighborhood = newItem.neighborhood.charAt(0).toUpperCase() + newItem.neighborhood.slice(1);
    newItem.crossStreet = [faker.address.streetName(), faker.address.streetName()].join(' and ');
    newItem.parking = faker.lorem.sentences();
    newItem.dining = faker.commerce.productAdjective();

    const cuisineCount = randRange(1, 3);
    let cuisines = [];
    for (let i = 0; i < cuisineCount; i++) {
      cuisines.push(faker.commerce.productMaterial());
    }
    newItem.cuisines = cuisines.join(', ');
    newItem.hours = 'Monday - Friday, ' + randRange(1, 12) + ':00am - ' + randRange(1, 12) + ':00pm';
    newItem.phone = faker.phone.phoneNumber();
    newItem.website = faker.internet.url();
    newItem.payment = 'Visa, Discover, MasterCard';
    newItem.dress = `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()}`;
    newItem.chef = faker.name.findName();

    if (randRange(0, 2) === 2) {
      newItem.catering = faker.lorem.sentences();
    } else {
      newItem.catering = 'null';
    }
    if (randRange(0, 2) === 2) {
      newItem.privateFacilities = faker.lorem.sentences();
    } else {
      newItem.privateFacilities = 'null';
    }

    let newOverviewItem = {};

    newOverviewItem.restaurantId = restaurantId;
    newOverviewItem.name = faker.company.companyName();
    newOverviewItem.rating = (Math.random() * 5).toFixed(1);
    newOverviewItem.reviewCount = Math.floor(Math.random() * 2000);
    const minRange = Math.floor(Math.random() * 42) + 8;
    const maxRange = minRange + Math.floor(Math.random() * 10) + 5
    newOverviewItem.costRange = [minRange, maxRange];
    newOverviewItem.cuisines = cuisines[0];
    newOverviewItem.description = faker.lorem.paragraph();
    const tagCount = randRange(1, 3);
    let tags = [];
    for (let i = 0; i < tagCount; i++) {
      const newTag = faker.commerce.productAdjective();
      if (tags.indexOf(newTag) < 0) {
        tags.push(newTag);
      }
    }
    newOverviewItem.tags = tags;

    return [newItem, newOverviewItem];
}

const stringifyItem = (data) => {
  return Object.values(data).map((data) => {
    if (Array.isArray(data)) { 
      return `"{${data}}"`;
    } else if (typeof data === 'string') {
      return `"${data}"`;
    } else { 
      return data; 
    }
  }).join(',') + '\n';
};

const sidebarWriter = fs.createWriteStream('sidebar.csv');

const overviewWriter = fs.createWriteStream('overview.csv');

const writeToFile = () => {
  let i = 0;
  let sidebarCanWrite = true;
  let overviewCanWrite = true;
  
  let data;
  const write = () => {
    if (!sidebarCanWrite) {
      overviewCanWrite = overviewWriter.write(stringifyItem(data[1]));
      i += 1;
    }
    sidebarCanWrite = true;
    overviewCanWrite = true;
    while (i < totalItems & sidebarCanWrite & overviewCanWrite) {
      data = populateItems(i + 1);
      sidebarCanWrite = sidebarWriter.write(stringifyItem(data[0]));
      if (sidebarCanWrite) {
        overviewCanWrite = overviewWriter.write(stringifyItem(data[1]));
        i += 1;
      }
    }
    if (i < totalItems) {
      if (overviewCanWrite) {
        sidebarWriter.once('drain', write);
      } else {
        overviewWriter.once('drain', write);
      }
    }
  }
  write();
}

writeToFile();
