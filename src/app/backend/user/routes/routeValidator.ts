import { Joi } from "express-validation";

export const createUserValidation = {
	body: Joi.object({
		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
	}),
};
