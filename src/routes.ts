import { Router } from "express";
import tasksController from "./tasks/controller/tasks.controller";
import usersController from "./users/controller/users.controller";

const routes = Router();

// buscar todas as tasks
routes.get("/getTasks", tasksController.find);

// criar nova task
routes.post("/newTask", tasksController.create);

// criar novo user
routes.post("/newUser", usersController.create);

// buscar todos os users
routes.get("/getUsers", usersController.find);

export { routes };
