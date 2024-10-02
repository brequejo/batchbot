import { query } from 'express-validator';

const userIdValidationRules = () => {
  return [
    query('userId')
      .notEmpty()
      .escape()
      .isMongoId()
      .withMessage('Invalid user ID'),
  ];
};

export default userIdValidationRules;
