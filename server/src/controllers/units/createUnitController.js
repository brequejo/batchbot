const createUnitController = async (req, res, next) => {
  try {
    const { name, type } = req.matchedData;

    /* const result = await insertRecipeService({
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
      }); */
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default createUnitController;
