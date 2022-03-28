import {Router} from "express";
import {EmailService} from "../services/EmailService.js";
import {OK} from "../helper.js";
import ApiError from "../exceptions/ApiError.js";

const EmailRouter = Router();

EmailRouter.get('/', async (req,res,next)=>{
    const { to, href } = req.query;
    if (!to || !href) return res.status(400).send('Отстутствует query params:href или to');
    try {
        await EmailService.registrationConfirm(to,href);
        return OK('Письмо успешно отправлено', res)
    } catch (e){
        next(e)
    }
})

export default EmailRouter;
