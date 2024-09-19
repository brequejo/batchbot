import jwt from "jsonwebtoken";
import { User } from "../../models/userModel.js";
import { TOKEN_KEY } from "../../../env.js";
import createServiceObject from "../../utils/serviceObjectUtil.js";

const validateUserService = async (email, registrationCode) => {
  const user = await User.findOne({ email });
  if (!user) {
    return createServiceObject("error", 404, "El usuario no existe.");
  }

  if (user.registrationCode === undefined) {
      return createServiceObject("error", 400, "Usuario ya validado.");
  }

  if (user.registrationCode !== registrationCode) {
    return createServiceObject(
      "error",
      400,
      "El código de registro es incorrecto."
    );
  }

  user.registrationCode = undefined;
  await user.save();

  return createServiceObject(
    "success",
    200,
    "El usuario se ha validado correctamente.",
    user
  );
};

export default validateUserService;
