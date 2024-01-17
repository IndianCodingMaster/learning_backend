import dotenv from "dotenv";
import express from "express";
import connectDB from "../src/db/connectdb.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
  connectDB();
});
