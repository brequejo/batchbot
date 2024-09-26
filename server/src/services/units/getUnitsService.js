import createServiceObject from "../../utils/serviceObjectUtil.js";
import { Unit } from "../../models/unitModel.js";

const getUnitsService = async () => {
  const unitsList = await Unit.find({});

  return createServiceObject("success", 200, "Unidades encontradas.", {
    count: unitsList.length,
    data: unitsList,
  });
};

export default getUnitsService;
