import { Schema, model } from "mongoose";

const tasksSchema = new Schema(
  {
    title: String,
    description: String,
    type: String,
    status: String,
    associatedUser: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default model("Task", tasksSchema, "tasks");
