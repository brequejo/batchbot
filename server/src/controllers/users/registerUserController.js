import insertUserService from "../../services/users/insertUserService.js";
import randomstring from "randomstring";
import { sendEmail } from "../../utils/emailUtils.js";
import {
  validateEmailTemplate,
  validateEmailSubject,
} from "../../utils/mail-templates/validateEmailTemplate.js";

const registerUserController = async (req, res, next) => {
  try {
    if (!(req.body.email && req.body.password)) {
      return res.status(400).send({
        message: "Rellena todos los campos",
      });
    }

    const { email, password } = req.body;

    const registrationCode = randomstring.generate(30);

    const result = await insertUserService(email, password, registrationCode);

    if (result.type !== "error") {
      await sendEmail(
        email,
        validateEmailSubject(),
        validateEmailTemplate(registrationCode)
      );
    }

    res.status(result.statusCode).send({
      message: result.message,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default registerUserController;
