import type { Response } from "express";
import { createCartItemService } from "../../../../contexts/cartItem/services/createCartItemService";
import { errorSender, responseSender } from "../../../../lib/requestHandler";
import {
	type BaseResponse,
	HTTP_CODES,
} from "../../../../lib/requestHandler/responseTypes";
import { SUCCESS_MSG } from "../lang/messages";
import type { AddItemToCartRequest } from "../types";

export default {
	async createCartItem(req: AddItemToCartRequest, res: Response<BaseResponse>) {
		try {
			const response = await createCartItemService({
				cartId: Number(req.body.cartId),
				items: req.body.items,
			});

			responseSender(res, {
				ok: true,
				code: HTTP_CODES.OK,
				status: "OK",
				message: SUCCESS_MSG.ITEM_CREATED,
				data: null,
			});
		} catch (error: unknown) {
			errorSender(res, error);
		}
	},
};
