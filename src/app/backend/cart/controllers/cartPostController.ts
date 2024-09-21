import type { Response } from "express";
import { addItemToCartService } from "../../../../contexts/cartItem/services/addItemToCartService";
import { errorSender, responseSender } from "../../../../lib/requestHandler";
import {
	type BaseResponse,
	HTTP_CODES,
} from "../../../../lib/requestHandler/responseTypes";
import { SUCCESS_MSG } from "../lang/messages";
import type { AddItemToCartRequest } from "../types";

export default {
	async addItemToCart(req: AddItemToCartRequest, res: Response<BaseResponse>) {
		try {
			const response = await addItemToCartService({
				cartId: Number(req.body.cartId),
				items: req.body.items,
			});

			responseSender(res, {
				ok: true,
				code: HTTP_CODES.CREATED,
				status: "CREATED",
				message: SUCCESS_MSG.ITEM_CREATED,
				data: response,
			});
		} catch (error: unknown) {
			errorSender(res, error);
		}
	},
};
