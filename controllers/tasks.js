const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    return res
      .status(404)
      .json({ success: false, msg: `No task with id: ${taskId}` });
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;

  const updatedTask = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedTask) {
    return res
      .status(404)
      .json({ success: false, msg: `No task with id: ${taskId}` });
  }

  res.status(200).json({ task: updatedTask });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const deletedTask = await Task.findByIdAndDelete({ _id: taskId });

  if (!deletedTask) {
    return res
      .status(404)
      .json({ success: false, msg: `No task with id: ${taskId}` });
  }

  res.status(200).json({ task: deletedTask });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
