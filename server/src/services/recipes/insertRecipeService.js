import createServiceObject from "../../utils/serviceObjectUtil.js";
import { Recipe } from "../../models/recipeModel.js";

const insertRecipeService = async ({
  name,
  author,
  description,
  ingredients,
  instructions,
  categories,
  tags,
  image,
  isPublic,
}) => {
  const newRecipe = {
    name,
    author,
    description,
    ingredients,
    instructions,
    categories,
    tags,
    image,
    isPublic,
  };

  const recipe = await Recipe.create(newRecipe);

  return createServiceObject(
    "success",
    200,
    "Receta creada correctamente.",
    recipe
  );
};

export default insertRecipeService;
