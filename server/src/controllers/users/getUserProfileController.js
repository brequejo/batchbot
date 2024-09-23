import selectUserByIdService from "../../services/users/selectUserByIdService.js";

const getUserProfileController = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await selectUserByIdService(id);

        if (result.type === "error") {
            return res.status(result.statusCode).send({
              message: result.message,
            });
          }
          res.json(result.data);
    } catch (error) {
        next(error);
    }
};

export default getUserProfileController;