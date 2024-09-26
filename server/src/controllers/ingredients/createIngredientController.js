import insertIngredientService from "../../services/ingredients/insertIngredientService.js";

const createIngredientController = async (req, res, next) => {
  try {
    const { name, units } = req.matchedData;

    const result = await insertIngredientService({
      name,
      units,
    });

    res.status(result.statusCode).send({
      message: result.message,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default createIngredientController;
