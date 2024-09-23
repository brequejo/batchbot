import express from "express";
import auth from "../middleware/auth.js";
import validator from "../middleware/validator.js";

import {
  createRecipeController,
  getUserRecipesController,
} from "../controllers/recipes/index.js";
import recipeValidationRules from "../middleware/validation-rules/recipeValidationRules.js";
import userIdValidationRules from "../middleware/validation-rules/userIdValidationRules.js";

const router = express.Router();

router.post(
  "/recipes",
  auth,
  recipeValidationRules(),
  validator,
  createRecipeController
);

router.get(
  "/recipes/:userId",
  auth,
  userIdValidationRules(),
  validator,
  getUserRecipesController
);

export default router;
