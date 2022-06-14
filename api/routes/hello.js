const express = require('express');
const router = express.Router();
const { sayHello } = require('../services/hello');

/* GET users listing. */
router.get('/', sayHello);

module.exports = router;
