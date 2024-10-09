import createServiceObject from "../../utils/serviceObjectUtil.js";
import { Recipe } from "../../models/recipeModel.js";

const getUserRecipesService = async (userId) => {
  
  const recipeList = await Recipe.find({ author: { _id: userId } });

  return createServiceObject("success", 200, "Recetas encontradas.", {
    count: recipeList.length,
    data: recipeList,
  });
};

export default getUserRecipesService;
