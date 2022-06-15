const express = require('express');
const router = express.Router();
const { index } = require('../services/index');

/* GET users listing. */
router.get('/', index);

module.exports = router;
