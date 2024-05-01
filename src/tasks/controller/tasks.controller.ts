import { Request, Response } from "express";
import TaskService from "../service/tasks.service";

class TaskController {
  async create(req: Request, res: Response) {
    try {
      const task = await TaskService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      return res.json({
        status: res.status(500),
        error: error,
      });
    }
  }

  async delete(req: Request, res: Response) {
    const deleted = await TaskService.deleteTask(req.params.id);
    return res.json(deleted);
  }

  async find(req: Request, res: Response) {
    const tasks = await TaskService.findTasks();
    return res.json(tasks);
  }
}

export default new TaskController();
