import getUserRecipesService from "../../services/recipes/getUserRecipesService.js";

const getUserRecipesController = async (req, res, next) => {
  try {
    const { userId } = req.matchedData;

    const result = await getUserRecipesService(userId);

    if (result.type === "error") {
      return res.status(result.statusCode).send({
        message: result.message,
      });
    }
    res.json(result.data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default getUserRecipesController;
