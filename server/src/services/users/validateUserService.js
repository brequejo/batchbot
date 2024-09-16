import { User } from '../../models/userModel.js';
import { TOKEN_KEY } from '../../../env.js';

const validateUserService = async (email, registrationCode) => {
    const user = await User.findOne({ email });
    if(!user) {
        return res.status(404).send("El usuario no existe.")
    };

    if(!user.registrationCode === registrationCode) {
        return res.status(400).send("El código de registro es incorrecto.")
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

export default validateUserService;