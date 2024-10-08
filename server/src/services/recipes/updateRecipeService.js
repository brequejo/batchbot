import { Recipe } from '../../models/recipeModel.js';
import createServiceObject from "../../utils/serviceObjectUtil.js";

const updateRecipeService = async (recipeId, userId, recipeData) => {
  try {
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return createServiceObject('error', 404, 'Receta no encontrada.');
    }

    if (recipe.author.toString() !== userId) {
      return createServiceObject('error', 403, 'No estás autorizado para borrar esta receta.');
    }

    Object.assign(recipe, recipeData);
    await recipe.save();

    return createServiceObject('success', 200, 'Receta actualizada.');

  } catch (error) {
    return createServiceObject('error', 500, 'Error al editar la receta.');
  }
};

export default updateRecipeService;
