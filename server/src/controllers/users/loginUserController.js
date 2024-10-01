import dayjs from "dayjs";
import loginUserService from "../../services/users/loginUserService.js";

const loginUserController = async (req, res, next) => {
  try {
    if (!(req.body.email && req.body.password)) {
      return res.status(400).send({
        message: "Rellena todos los campos.",
      });
    }

    const { email, password } = req.body;

    const result = await loginUserService(email, password);

    if (result.type === "error") {
      return res.status(result.statusCode).send({
        message: result.message,
      });
    }
    res.cookie("batchbot", result.data.token, {
      //secure: true,
      httpOnly: true,
      expires: dayjs().add(30, "days").toDate(),
    });
    const userData = {
      userId: result.data.id,
      email: result.data.email,
      userName: result.data.userName,
      profileImage: result.data.profileImage,
    };
    res.json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export default loginUserController;
