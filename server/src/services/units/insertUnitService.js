import createServiceObject from "../../utils/serviceObjectUtil.js";
import { Unit } from "../../models/unitModel.js";

const insertUnitService = async ({ name, abbreviation, type }) => {
  const newUnit = {
    name,
    abbreviation,
    type,
  };

  const unit = await Unit.create(newUnit);

  return createServiceObject(
    "success",
    200,
    "Unidad creada correctamente.",
    unit
  );
};

export default insertUnitService;
