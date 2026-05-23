import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const LOCAL_MONGO_URI = process.env.LOCAL_MONGO_URI;
export const MONGO_URI =
  process.env.MONGO_URI ||
  process.env.LOCAL_MONGO_URI ||
  "mongodb://localhost:27017/esusu";
