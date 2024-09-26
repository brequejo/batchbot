import express from "express";

import userRouter from "./userRouter.js";
import recipeRouter from "./recipeRouter.js";
import ingredientsRouter from "./ingredientsRouter.js";
import unitsRouter from "./unitsRouter.js";

const router = express.Router();

router.use(userRouter);
router.use(recipeRouter);
router.use(ingredientsRouter);
router.use(unitsRouter);

export default router;
