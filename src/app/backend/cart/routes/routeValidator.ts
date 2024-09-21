import { Joi } from "express-validation";

export const createCartItemValidation = {
	body: Joi.object({
		cartId: Joi.number().required(),
		items: Joi.array().items(
			Joi.object({
				productId: Joi.number().required(),
				quantity: Joi.number().required(),
			}),
		),
	}),
};
