import dotenv from "dotenv";
import connectdb from "./db/connectdb.js";
import app from "./app.js";
dotenv.config();

connectdb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
