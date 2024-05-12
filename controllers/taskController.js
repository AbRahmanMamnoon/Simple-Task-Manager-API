const Task = require("../models/taskModel");
const asyncWrapper = require("../middleware/async");

exports.createTask = asyncWrapper(async (req, res, next) => {
  const { name, completed } = req.body;
  if (!name) {
    return res.status(403).json({
      status: "Filed",
      message: "task name is required!",
    });
  }
  const task = await Task.create({
    name,
    completed,
  });
  res.status(201).json({
    status: "success",
    data: {
      task,
    },
  });
});

exports.getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find();

  res.status(200).json({
    status: "success",
    length: tasks.length,
    data: {
      tasks,
    },
  });
});

exports.getTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findById({ _id: req.params.id });
  if (!task) {
    const err = new Error(
      `Ther is no task with requested id: ${req.params.id}`
    );
    err.status = 404;
    return next(err);
  }
  res.status(200).json({
    status: "success",
    data: {
      task,
    },
  });
});

exports.updateTask = asyncWrapper(async (req, res, next) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidator: true,
  });
  if (!updatedTask) {
    return res.status(404).json({
      status: "Filed",
      message: "Ther is no task with the requested id!",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      task: updatedTask,
    },
  });
});

exports.deleteTask = async (req, res, next) => {
  await Task.deleteOne({ _id: req.params.id });
  res.status(204).json({
    status: "success",
    data: null,
  });
};
