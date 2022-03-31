import {body} from "express-validator";

export const nameValidator = body('name').not().isEmpty();
export const emailValidator = body('email').isEmail();
export const birthDateValidator = body('birthDate').isISO8601().toDate();

export const createUserValidators = [nameValidator,emailValidator,birthDateValidator];
