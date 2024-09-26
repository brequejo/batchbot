import { body } from "express-validator";

const unitValidationRules = () => {
  return [
    body("name").notEmpty(),
    body("abbreviation").notEmpty(),
    body("type").notEmpty(),
  ];
};

export default unitValidationRules;
