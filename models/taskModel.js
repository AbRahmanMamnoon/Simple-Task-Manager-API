const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "name is required for task!"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
