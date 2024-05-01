import TaskModel from "../schemas/tasks.schema";

class TaskService {
  async createTask(task: any) {
    const createdTask = await TaskModel.create(task);
    return createdTask;
  }

  async deleteTask(id: any) {
    const deletedTask = await TaskModel.findByIdAndDelete(id);
    return `Task ${deletedTask?.title} deletada com sucesso.`;
  }

  async findTasks() {
    const foundedTasks = await TaskModel.find();
    return foundedTasks;
  }
}

export default new TaskService();
