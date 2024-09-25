import { body } from "express-validator";

const recipeValidationRules = () => {
  return [
    body("name").notEmpty(),
    body("description").notEmpty(),
    body("ingredients").notEmpty(),
    body("instructions").notEmpty(),
    body("categories").notEmpty(),
    body("tags").notEmpty(),
    body("image").notEmpty(),
    body("isPublic").notEmpty(),
  ];
};

export default recipeValidationRules;
