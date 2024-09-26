import createServiceObject from "../../utils/serviceObjectUtil.js";
import { Ingredient } from "../../models/ingredientModel.js";

const getIngredientsService = async () => {
  const ingredientList = await Ingredient.find({});

  return createServiceObject("success", 200, "Ingredientes encontrados.", {
    count: ingredientList.length,
    data: ingredientList,
  });
};

export default getIngredientsService;
