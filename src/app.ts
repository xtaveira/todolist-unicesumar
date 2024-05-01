import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
    this.database();
    this.routes();
  }

  // parse to json everything that pass thought the express
  public middleware(): void {
    this.express.use(express.json());
  }

  public async database() {
    try {
      mongoose.set("strictQuery", true);
      await mongoose.connect("mongodb://0.0.0.0:27017/todolist");
      console.log("MongoDB Connection established");
    } catch (error) {
      console.error(error);
    }
  }

  public routes(): void {
    this.express.use(routes);
  }
}

// Já exporta instânciando e chamando o express dela
export default new App().express;
