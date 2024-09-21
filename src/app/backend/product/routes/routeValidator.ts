import { Joi } from "express-validation";

export const createProductValidation = {
	body: Joi.object({
		type: Joi.string().valid("PRODUCT", "EVENT").required(),
		price: Joi.number().positive().required(),
		stock: Joi.number().positive().required(),
		thumbnail: Joi.string().uri().required(),
		description: Joi.string().required(),
	}),
};
