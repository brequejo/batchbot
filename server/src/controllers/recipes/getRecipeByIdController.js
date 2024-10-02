import selectRecipeByIdService from "../../services/recipes/selectRecipeByIdService.js";

const getRecipeByIdController = async (req, res, next) => {
    try {
        const {recipeId} = req.params;
        const result = await selectRecipeByIdService(recipeId);

        if (result.type === "error") {
            return res.status(result.statusCode).send({
              message: result.message,
            });
          }
          res.json(result.data);
    } catch (error) {
        next(error);
    }
};

export default getRecipeByIdController;