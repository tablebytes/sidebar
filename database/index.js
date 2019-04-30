const mongoose = require('mongoose');

const mongoUri = 'mongodb://127.0.0.1:27017/openTableSidebar';

mongoose.connect(mongoUri, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('connected', () => console.log('Database connected.'));
db.on('error', () => console.log('Database has error.'));
db.on('disconnected', () => console.log('Database disconnected.'));

module.exports = db;
