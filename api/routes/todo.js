const express = require('express');
const router = express.Router();
const { getAllTodo, createTodo} = require('../services/todo');

router.get('/', getAllTodo);

router.post('/create', createTodo);

module.exports = router