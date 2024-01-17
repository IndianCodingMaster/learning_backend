import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log("Successfully connected to mongo");
  } catch (error) {
    console.log("Connection FAILED", error);
  }
};

export default connectDB;
