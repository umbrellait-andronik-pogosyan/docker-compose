const mongoose = require('mongoose');
const DB_PORT = process.env.DB_PORT

const connectionString = `mongodb://mongo-db:${DB_PORT}`;

mongoose.connect(connectionString, { useNewUrlParser: true })
.then(r => console.log('DB connected!'))
.catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;