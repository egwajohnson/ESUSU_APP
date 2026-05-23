import mongoose from "mongoose";
import { MONGO_URI, LOCAL_MONGO_URI } from "./system.variable.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${LOCAL_MONGO_URI}`);

    console.log("database connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);

    process.exit(1);
  }
};
