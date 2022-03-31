import {Router} from "express";
import {HttpError, OK} from "../helper.js";
import AuthService from "../services/AuthService.js";

const AuthRouter = Router();

AuthRouter.post('/login', async (req, res, next) => {
    try {
        const {email} = req.body;
        const token = await AuthService.login(email);
        return OK(token, res)
    } catch (e) {
        next(e)
    }
})

export default AuthRouter;
