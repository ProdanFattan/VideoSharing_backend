// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/connectDB.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));

/*
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
})();
*/
