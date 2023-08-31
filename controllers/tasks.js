const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `No task with id: ${taskId}` });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
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

    res.status(200).json({ success: true, data: updatedTask });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const deletedTask = await Task.findByIdAndDelete({ _id: taskId });

    if (!deletedTask) {
      return res
        .status(404)
        .json({ success: false, msg: `No task with id: ${taskId}` });
    }

    res.status(200).json({ success: true, data: deletedTask });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
