const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: String,
    closed: Boolean
})

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;