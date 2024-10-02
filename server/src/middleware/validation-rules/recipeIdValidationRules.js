import { param } from "express-validator";

const recipeIdValidationRules = () => {
  return [
    param("recipeId")
      .isMongoId()
      .withMessage("Invalid recipe ID"),
  ];
};

export default recipeIdValidationRules;
