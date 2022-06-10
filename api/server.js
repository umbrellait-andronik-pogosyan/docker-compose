const express = require('express');
const app = express();
const port = 3080;

app.get('/', function(req, res) {
    res.send('its api');
});

app.get('/hello', function(req, res) {
    res.send('hello world');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});