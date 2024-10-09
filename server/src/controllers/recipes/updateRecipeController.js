import updateRecipeService from '../../services/recipes/updateRecipeService.js';

const updateRecipeController = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const recipeData = req.matchedData;

    const result = await updateRecipeService(
      recipeData.recipeId,
      userId,
      recipeData
    );

    if (result.type === 'error') {
      return res.status(result.statusCode).send({
        message: result.message,
      });
    }
    res.status(200).send({ message: 'Receta Actualizada.', data: result.data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default updateRecipeController;
