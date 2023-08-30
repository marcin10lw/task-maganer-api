const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const createTask = (req, res) => {
  const body = req.body;
  res.json(body);
};

const getTask = (req, res) => {
  const { id } = req.params;
  res.send(`get single task, id: ${id}`);
};

const updateTask = (req, res) => {
  const { id } = req.params;
  res.send(`update task, id:${id}`);
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  res.send(`delete task, id:${id}`);
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
