import express from "express";
import auth from "../middleware/auth.js";
import validator from "../middleware/validator.js";

import { createRecipeController } from "../controllers/recipes/index.js";
import recipeValidationRules from "../middleware/validation-rules/recipeValidationRules.js";

const router = express.Router();

router.post(
  "/recipes",
  auth,
  recipeValidationRules(),
  validator,
  createRecipeController
);

export default router;
