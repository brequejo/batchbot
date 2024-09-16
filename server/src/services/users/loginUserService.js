import { User } from '../../models/userModel.js';
import { TOKEN_KEY } from '../../../env.js';
import bcrypt from "bcrypt";

const loginUserService = async (email, password) => {
    const user = await User.findOne({ email });
    if(!user) {
        return res.status(404).send("El usuario no existe.")
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    if(!user.password === hashedPassword) {
        return res.status(400).send("Contraseña incorrecta.")
    };

    const token = jwt.sign(
        { user_id: user._id, email },
        TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );
      user.token = token;

      return user;
  
}

export default loginUserService;