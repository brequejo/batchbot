import { Recipe } from '../../models/recipeModel.js';
import createServiceObject from "../../utils/serviceObjectUtil.js";

const deleteRecipeService = async (recipeId, userId) => {
  try {
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return createServiceObject('error', 404, 'Receta no encontrada.');
    }

    if (recipe.author.toString() !== userId) {
      return createServiceObject('error', 403, 'No estás autorizado para borrar esta receta.');
    }

    const deleteRecipe = await Recipe.findByIdAndDelete(recipeId);

    return createServiceObject('success', 200, 'Receta borrada.');

  } catch (error) {
    return createServiceObject('error', 500, 'Error al borrar receta.');
  }
};

export default deleteRecipeService;
