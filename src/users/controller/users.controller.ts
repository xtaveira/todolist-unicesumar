import { Request, Response } from "express";
import usersService from "../service/users.service";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const user = await usersService.createUser(req.body);
      return res.status(201).send(user);
    } catch (error) {
      console.log(error);
    }
  }

  async find(req: Request, res: Response) {
    try {
      const users = await usersService.findAllUsers();
      return res.status(201).send(users);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
