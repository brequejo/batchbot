import loginUserService from "../../services/users/loginUserService.js";

const loginUserController = async (req, res, next) => {
  try {
    if (!(req.body.email && req.body.password)) {
      return res.status(400).send({
        message: "Rellena todos los campos.",
      });
    }

    const { email, password } = req.body;

    await loginUserService(email, password);

    res.send({
      status: "ok",
      message:
        "Login Ok.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default loginUserController;