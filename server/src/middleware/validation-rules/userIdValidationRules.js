import { param } from "express-validator";

const userIdValidationRules = () => {
  return [param("userId").notEmpty().escape().isLength(24)];
};

export default userIdValidationRules;
