import express from "express";
import auth from "../middleware/auth.js";
import validator from "../middleware/validator.js";

import {
  createRecipeController,
  getUserRecipesController,
  getRecipeByIdController,
  deleteRecipeController,
  updateRecipeController,
} from "../controllers/recipes/index.js";
import recipeValidationRules from "../middleware/validation-rules/recipeValidationRules.js";
import userIdValidationRules from "../middleware/validation-rules/userIdValidationRules.js";
import recipeIdValidationRules from "../middleware/validation-rules/recipeIdValidationRules.js";

const router = express.Router();

router.post(
  "/recipes",
  auth,
  recipeValidationRules(),
  validator,
  createRecipeController
);

router.get(
  "/recipes",
  auth,
  userIdValidationRules(),
  validator,
  getUserRecipesController
);

router.get(
  "/recipes/:recipeId",
  auth,
  recipeIdValidationRules(),
  validator,
  getRecipeByIdController,
);

router.delete(
  "/recipes/:recipeId",
  auth,
  recipeIdValidationRules(),
  validator,
  deleteRecipeController
);

router.put(
  "/recipes/:recipeId",
  auth,
  recipeIdValidationRules(),
  recipeValidationRules(),
  validator,
  updateRecipeController
);

export default router;
