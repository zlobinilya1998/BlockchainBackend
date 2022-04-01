import {body} from "express-validator";

export const nameValidator = body('login').not().isEmpty();
export const emailValidator = body('email').isEmail();
export const birthDateValidator = body('password').isISO8601().toDate();

export const createUserValidators = [nameValidator,emailValidator,birthDateValidator];
