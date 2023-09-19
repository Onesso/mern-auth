import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); //deotenv must be import and initialised

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mongodb");
  }) //if not
  .catch((err) => {
    console.log(err);
  });

const app = Express();

app.listen(3000, () => {
  console.log("listening to port 3000!");
});
