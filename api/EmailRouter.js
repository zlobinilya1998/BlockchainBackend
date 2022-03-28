import {Router} from "express";
import {EmailService} from "../services/EmailService.js";
import {OK} from "../helper.js";

const EmailRouter = Router();

EmailRouter.post('/confirmRegistration', async (req,res,next)=>{
    const { to, href } = req.body;
    if (!to || !href) return res.status(400).send('Отстутствует обязательные параметры в req.body:href или to');

    try {
        await EmailService.registrationConfirm(to,href);
        return OK('Письмо успешно отправлено', res)
    } catch (e){
        next(e)
    }
})

export default EmailRouter;
