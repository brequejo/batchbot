import insertRecipeService from "../../services/recipes/insertRecipeService.js";

const createRecipeController = async (req, res, next) => {
  try {
    const {
      name,
      description,
      instructions,
      categories,
      tags,
      image,
      isPublic,
    } = req.matchedData;

    const result = await insertRecipeService({
      name,
      author: req.user.user_id,
      description,
      instructions,
      categories,
      tags,
      image,
      isPublic,
    });

    res.status(result.statusCode).send({
      message: result.message,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default createRecipeController;
