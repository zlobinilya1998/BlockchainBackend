import {Router} from "express";
import {HttpError, OK} from "../helper.js";
import AuthService from "../services/AuthService.js";
import TokenService from "../services/TokenService.js";
import bcrypt from "bcrypt";
import ApiError from "../exceptions/ApiError.js";

const AuthRouter = Router();

AuthRouter.post('/login', async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await AuthService.login(email, password);

        const match = await bcrypt.compare(password, user.password);

        if (match) {
            const token = await TokenService.generateToken(user.email);
            return OK({token, userInfo: user}, res)
        }

        next(ApiError.BadRequest('Ошибка при вводе данных'));

    } catch (e) {
        next(e)
    }
})

export default AuthRouter;
