import {Router} from "express";
import {HttpError, OK} from "../helper.js";
import UserService from "../services/UserService.js";
import {validationResult} from "express-validator";
import {createUserValidators} from "../validators/userValidator.js";
import ApiError from "../exceptions/ApiError.js";

const UserRouter = Router();

UserRouter.post('/register', ...createUserValidators, async (req, res, next) => {
    const errors = validationResult(req);
    const haveErrors = !errors.isEmpty()
    try {
        if (haveErrors) throw ApiError.BadRequest();

        const {name, email, birthDate} = req.body;
        const user = await UserService.create({name, email, birthDate});
        return OK(user, res)
    } catch (e) {
        next(e)
    }
})

export default UserRouter;
