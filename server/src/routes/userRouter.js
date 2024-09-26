import express from "express";
import verifyToken from "../middleware/auth.js";
import auth from "../middleware/auth.js";


import {
  registerUserController,
  validateUserController,
  loginUserController,
  selectUserByIdService,
  getUserProfileController
} from "../controllers/users/index.js";

const router = express.Router();

router.post("/users/register", registerUserController);

router.post("/users/validate", validateUserController);

router.post("/users/login", loginUserController);

router.post("/token-test", auth, (req, res) => {
  res.status(200).send("Token apañao 🙌");
});

router.get("/users/:userId", auth, getUserProfileController);

router.get('/home', auth);

export default router;
