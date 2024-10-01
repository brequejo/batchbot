import { User } from "../../models/userModel.js"
import createServiceObject from "../../utils/serviceObjectUtil.js";

const selectUserByIdService = async (userId) => {
    try{
        const user = await User.findById(userId);
        if (!user) {
            return createServiceObject(
                "error",
                404,
                "Usuario no encontrado");
        };

        const userData = {
            userId: user._id,
            email: user.email,
            username: user.userName,
            profilePicture: user.profileImage
        };

        return createServiceObject(
            "Success",
            200,
            "Datos del usuario:", userData);

    }catch (error) {
        console.error("Usuario no encontrado.", error.message);
        throw error;
    }
};

export default selectUserByIdService;