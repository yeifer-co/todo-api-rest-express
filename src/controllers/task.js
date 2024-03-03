import db from '@/database';

/**
 * GET /task(s)?
 * Return all tasks
 */
export const allTasks = async (req, res, next) => {
  try {
    const tasks = await db.models.task.findAll();
    if (tasks.length === 0) {
      return res.sendResponse({ code: 404, message: "No tasks found" });
    }
    res.sendResponse({
      data: tasks,
      message: "All tasks are retrieved, be aware of the amount of data retrieved, no pagination is implemented",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /task(s)?
 * Create a task
 */
export const createTask = async (req, res, next) => {
  try {
    const task = await db.models.task.create(req.body);
    res.sendResponse({
      code: 201,
      data: task,
      message: "Task created successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /task(s)?/:id
 * Return a task by id
 */
export const getTask = async (req, res, next) => {
  try {
    const task = await db.models.task.findByPk(req.params.id);
    if (!task) {
      return res.sendResponse({ code: 404, message: "Task not found" });
    }
    res.sendResponse({
      data: task,
      message: "Task retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /task(s)?/:id
 * Update a task by id
 */
export const updateTask = async (req, res, next) => {
  try {
    let task = await db.models.task.findByPk(req.params.id);
    if (!task) {
      return res.sendResponse({ code: 404, message: "Task not found" });
    }
    await task.update(req.body);
    task = await db.models.task.findByPk(req.params.id); // Refresh task after update
    res.sendResponse({
      code: 200,
      data: task,
      message: "Task updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /task(s)?/:id
 * Delete a task by id
 */
export const deleteTask = async (req, res, next) => {
  try {
    const task = await db.models.task.findByPk(req.params.id);
    if (!task) {
      return res.sendResponse({ code: 404, message: "Task not found" });
    }
    await task.destroy();
    res.sendResponse({
      code: 200,
      data: task,
      message: "Task deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
