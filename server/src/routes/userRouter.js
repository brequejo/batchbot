import express from "express";

import {
  registerUserController,
  validateUserController,
  loginUserController
} from "../controllers/users/index.js";

const router = express.Router();

router.post("/users/register", registerUserController);

router.post("/users/validate", validateUserController);

router.post("users/login", loginUserController);

export default router;
