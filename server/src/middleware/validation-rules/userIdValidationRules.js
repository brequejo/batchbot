import { query } from "express-validator";

const userIdValidationRules = () => {
  return [
    query("userId")
      .isMongoId()
      .withMessage("Invalid user ID"),
  ];
};

export default userIdValidationRules;
