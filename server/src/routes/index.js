import express from "express";

import userRouter from "./userRouter.js";
import recipeRouter from "./recipeRouter.js";

const router = express.Router();

router.use(userRouter);
router.use(recipeRouter);

export default router;
