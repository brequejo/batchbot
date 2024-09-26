import createServiceObject from "../../utils/serviceObjectUtil.js";
import { Ingredient } from "../../models/ingredientModel.js";

const insertIngredientService = async ({ name, units }) => {
  const newIngredient = {
    name,
    units,
  };

  const ingredient = await Ingredient.create(newIngredient);

  return createServiceObject(
    "success",
    200,
    "Ingrediente creado correctamente.",
    ingredient
  );
};

export default insertIngredientService;
