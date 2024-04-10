import { Schema, model } from "mongoose";
import usersSchema from "../../users/schema/users.schema";

const tasksSchema = new Schema(
  {
    title: String,
    description: String,
    type: String,
    status: String,
    associatedUser: { type: usersSchema },
  },
  { timestamps: true }
);

export default model("tasks", tasksSchema);
