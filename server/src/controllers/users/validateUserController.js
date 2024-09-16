import validateUserService from "../../services/users/validateUserService.js";

const validateUserController = async (req, res, next) => {
  try {
    if (!(req.body.email && req.body.registrationCode)) {
      return res.status(400).send({
        message: "Rellena todos los campos.",
      });
    }

    const { email, registrationCode } = req.body;

    const result = await validateUserService(email, registrationCode);

    if (result.type === "error") {
      return res.status(result.statusCode).send({
        message: result.message,
      });
    }
    res.json(result.data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default validateUserController;
