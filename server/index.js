import express from "express";
import cors from "cors";
import { PORT, DB_URL } from "./env.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });