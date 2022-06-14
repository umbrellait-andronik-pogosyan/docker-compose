const mongoose = require('mongoose');

const connectionString = 'mongodb://mongo-db:27017';

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;