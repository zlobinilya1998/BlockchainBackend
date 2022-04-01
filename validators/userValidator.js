import {body} from "express-validator";

export const nameValidator = body('login').not().isEmpty().isString();
export const emailValidator = body('email').isEmail();
export const passwordValidator = body('password').not().isEmpty().isString();

export const createUserValidators = [nameValidator,emailValidator,passwordValidator];
