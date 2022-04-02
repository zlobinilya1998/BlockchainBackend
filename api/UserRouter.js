import {Router} from "express";
import {HttpError, OK} from "../helper.js";
import UserService from "../services/UserService.js";
import {validationResult} from "express-validator";
import {createUserValidators} from "../validators/userValidator.js";
import ApiError from "../exceptions/ApiError.js";
import {EmailService} from "../services/EmailService.js";

const UserRouter = Router();

UserRouter.get('/activate/:email', async (req, res, next) => {
    try {
       const { email } = req.params;
       await UserService.activate(email);
       res.redirect('https://blockchain-front-vue2.vercel.app/login');
    } catch (e) {
        next(e)
    }
})
UserRouter.post('/register', ...createUserValidators, async (req, res, next) => {
    const errors = validationResult(req);
    const haveErrors = !errors.isEmpty()
    try {
        if (haveErrors) throw ApiError.BadRequest('Ошибка в теле запроса', errors.errors);

        const {name, email, birthDate} = req.body;
        const user = await UserService.create({name, email, birthDate});
        await EmailService.registrationConfirm(email, `https://blockchain-backend.vercel.app/api/user/activate/${email}`)
        return OK(user, res)
    } catch (e) {
        next(e)
    }
})

export default UserRouter;
