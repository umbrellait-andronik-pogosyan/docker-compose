const mongoose = require('mongoose');

const Todo = require('../models/Todo.model');

const todoService = {
    createTodo: async (req, res) => {
        try {
            const { title, closed } = req.body

            const newTodo = new Todo({title, closed})

            const result = await newTodo.save()

            res.send(result)
        
        } catch (e) {
            res.status(500).json({message: 'Server error'})
        }
    },
    getAllTodo: async (req, res) => {
        try {
            const result = await Todo.find()

            res.send(result)
        
        } catch (e) {
            res.status(500).json({message: 'Server error'})
        }
    }
}

module.exports = todoService