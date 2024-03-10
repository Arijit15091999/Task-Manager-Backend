const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxLength:[20, 'name can not be more than 20 char']
  },
  completed: {
    type: Boolean,
    default: false,
    required: true
  }
})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task;
