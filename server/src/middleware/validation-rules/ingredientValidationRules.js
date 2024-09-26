import { body } from "express-validator";

const ingredientValidationRules = () => {
  return [body("name").notEmpty(), body("units").notEmpty()];
};

export default ingredientValidationRules;
