import deleteRecipeService from "../../services/recipes/deleteRecipeService.js";

const deleteRecipeController = async (req, res) => {
  try {
    const { recipeId } = req.matchedData;
    const userId = req.user.user_id;

    const result = await deleteRecipeService(recipeId, userId);

    if (result.type === "error") {
      return res.status(result.statusCode).send({
        message: result.message,
      });
    }
    res.status(200).send({ message: "Receta borrada." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default deleteRecipeController;