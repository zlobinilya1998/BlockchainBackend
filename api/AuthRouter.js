import {Router} from "express";
import {HttpError, OK} from "../helper.js";
import AuthService from "../services/AuthService.js";
import TokenService from "../services/TokenService.js";

const AuthRouter = Router();

AuthRouter.post('/login', async (req, res, next) => {
    try {
        const {email} = req.body;
        const user = await AuthService.login(email);
        const token = await TokenService.generateToken(user.email);
        return OK({token,userInfo: user}, res)
    } catch (e) {
        next(e)
    }
})

export default AuthRouter;
