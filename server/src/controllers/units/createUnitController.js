import insertUnitService from "../../services/units/insertUnitService.js";

const createUnitController = async (req, res, next) => {
  try {
    const { name, abbreviation, type } = req.matchedData;

    const result = await insertUnitService({
      name,
      abbreviation,
      type,
    });

    res.status(result.statusCode).send({
      message: result.message,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default createUnitController;
