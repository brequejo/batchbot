import { Recipe } from "../../models/recipeModel.js"
import createServiceObject from "../../utils/serviceObjectUtil.js";

const selectRecipeByIdService = async (recipe_id) => {
    try{
        const recipe = await Recipe.findById(recipe_id);

        if (!recipe) {
            return createServiceObject(
                "error",
                404,
                "Receta no encontrada");
        };

        return createServiceObject(
            "Success",
            200,
            "Receta:", recipe);

    }catch (error) {
        console.error("Receta no encontrada.", error.message);
        throw error;
    }
};

export default selectRecipeByIdService;