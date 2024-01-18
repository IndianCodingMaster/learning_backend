import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Successfully connected to MONGO");
  } catch (err) {
    console.log("Connection FAILED", err);
  }
};

export default connectdb;
