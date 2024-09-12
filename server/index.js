import express from "express";
import cors from "cors";
import { PORT, DB_URL } from "./env.js";
import mongoose from "mongoose";
import routes from "./src/routes/index.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(routes);

mongoose
.connect(DB_URL)
.then(() => {
  console.log("App connected to database");
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.log(error);
});