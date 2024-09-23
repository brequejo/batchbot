import express from "express";
import auth from "../middleware/auth.js";
import validator from "../middleware/validator.js";

import {
  createIngredientController,
  getIngredientsController,
} from "../controllers/ingredients/index.js";
import ingredientValidationRules from "../middleware/validation-rules/ingridientValidationRules.js";

const router = express.Router();

router.post(
  "/ingredients",
  auth,
  ingredientValidationRules(),
  validator,
  createIngredientController
);

router.get("/ingredients", auth, getIngredientsController);

export default router;
