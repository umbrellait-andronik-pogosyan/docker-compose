const express = require('express');
const app = express();
const port = 3080;
const indexRouter = require('./routes/index');
const helloRouter = require('./routes/hello');
const todoRouter = require('./routes/todo')
const db = require('./db');


app.use('/', indexRouter);

app.use('/hello', helloRouter);

app.use('/todo', todoRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});