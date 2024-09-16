import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../models/userModel.js";
import { TOKEN_KEY } from "../../../env.js";
import createServiceObject from "../../utils/serviceObjectUtil.js";

const loginUserService = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    return createServiceObject(
      "error",
      400,
      "Datos de inicio de sesión incorrectos."
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  if (!user.password === hashedPassword) {
    return createServiceObject(
      "error",
      400,
      "Datos de inicio de sesión incorrectos."
    );
  }

  const token = jwt.sign({ user_id: user._id, email }, TOKEN_KEY, {
    expiresIn: "24h",
  });
  user.token = token;

  return createServiceObject(
    "success",
    200,
    "El usuario se ha validado correctamente.",
    user
  );
};

export default loginUserService;
