'use strict';

const generateRandomNumber = (userContext, events, done) => {
  userContext.vars.id = Math.floor(Math.random() * 10) < 8 ? Math.floor(Math.random() * 1000000) + 9000000 :  Math.floor(Math.random() * 10000000);

  return done();
};

module.exports = {
  generateRandomNumber
};
