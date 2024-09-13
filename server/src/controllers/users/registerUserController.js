import insertUserService from "../../services/users/insertUserService.js";
import randomstring from "randomstring";
import { sendEmail } from "../../utils/emailUtils.js";
import {
  validateEmailTemplate,
  validateEmailSubject,
} from "../../utils/mail-templates/validateEmailTemplate.js";

const registerUserController = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "Rellena todos los campos",
      });
    }

    const { email, password } = req.body;

    const registrationCode = randomstring.generate(30);

    await insertUserService(email, password);

    await sendEmail(
      email,
      validateEmailSubject(),
      validateEmailTemplate(registrationCode)
    );

    res.send({
      status: "ok",
      message:
        "Usuario registrado correctamente. Por favor, revisa tu correo para activar la cuenta.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
    //next(error);
  }
};

export default registerUserController;
