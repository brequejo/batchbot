import { param } from 'express-validator';

const recipeIdValidationRules = () => {
  return [
    param('recipeId')
      .notEmpty()
      .escape()
      .isMongoId()
      .withMessage('Invalid recipe ID'),
  ];
};

export default recipeIdValidationRules;
