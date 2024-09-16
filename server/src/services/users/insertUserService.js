import bcrypt from 'bcrypt';
import uniqueNameGenerator from "../../utils/uniqueNameGenerator.js";
import { User } from '../../models/userModel.js';

const insertUserService = async (email, password, registrationCode) => {

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

      return user;

};

export default insertUserService;