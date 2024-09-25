const getIngredientsController = async (req, res, next) => {
  try {
    /* const result = await getUserRecipesService(userId);

    if (result.type === "error") {
      return res.status(result.statusCode).send({
        message: result.message,
      });
    }
    res.json(result.data); */
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default getIngredientsController;
