import express from "express";
import auth from "../middleware/auth.js";
import validator from "../middleware/validator.js";

import {
  createUnitController,
  getUnitsController,
} from "../controllers/units/index.js";
import unitValidationRules from "../middleware/validation-rules/unitValidationRules.js";

const router = express.Router();

router.post(
  "/units",
  auth,
  unitValidationRules(),
  validator,
  createUnitController
);

router.get("/units", auth, getUnitsController);

export default router;
