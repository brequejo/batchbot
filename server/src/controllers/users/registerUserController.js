import bcrypt from 'bcrypt';
import insertUserService from '../../services/users/insertUserService.js';

const registerUserController = async (req, res, next) => {
    try {
        
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({
              message: "Rellena todos los campos",
            });
          }

        const { email, password } =
            req.body;

        // TODO Tarea a realizar 
        //código de registro para comprobar email
        //const registrationCode = randomstring.generate(30);

        await insertUserService(
            email,
            password
        );

  

        res.send({
            status: 'ok',
            message:
                'Usuario registrado correctamente.'
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({message: error.message});
        //next(error);
    }
};

export default registerUserController;