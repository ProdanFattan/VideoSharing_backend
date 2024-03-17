import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(express.static("public"));
app.use(cookieParser());

// ROUTES
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter); //add /api to the url so that it is clear where each route belongs to

export { app };
