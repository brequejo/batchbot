import bcrypt from "bcrypt";
import uniqueNameGenerator from "../../utils/uniqueNameGenerator.js";
import { User } from "../../models/userModel.js";
import createServiceObject from "../../utils/serviceObjectUtil.js";

const insertUserService = async (email, password, registrationCode) => {
  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return createServiceObject(
      "error",
      400,
      "El usuario ya existe. Por favor, inicia sesión."
    );
  }

  const uniqueUserName = uniqueNameGenerator();
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    userName: uniqueUserName,
    email: email,
    password: hashedPassword,
    profileImage: "genericProfilePicture.png",
    foodPreferences: [],
    foodAllergies: [],
    registrationCode: registrationCode,
  };

  const user = await User.create(newUser);

  return createServiceObject(
    "success",
    200,
    "Usuario registrado correctamente. Por favor, revisa tu correo para activar la cuenta.",
    user
  );
};

export default insertUserService;
