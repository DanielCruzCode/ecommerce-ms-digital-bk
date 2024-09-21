import type { Request, Response } from "express";
import { cartSummaryService } from "../../../../contexts/cartItem/services/cartSummaryService";
import { listCartsService } from "../../../../contexts/cartItem/services/listCartsService";
import { errorSender, responseSender } from "../../../../lib/requestHandler";
import {
	type BaseResponse,
	HTTP_CODES,
} from "../../../../lib/requestHandler/responseTypes";
import { SUCCESS_MSG } from "../lang/messages";
import type { CartSummaryRequest } from "../types";

export default {
	async list(req: Request, res: Response<BaseResponse>) {
		try {
			const response = await listCartsService();

			responseSender(res, {
				ok: true,
				code: HTTP_CODES.OK,
				status: "OK",
				message: SUCCESS_MSG.CARTS_LISTED,
				data: response,
			});
		} catch (error: unknown) {
			errorSender(res, error);
		}
	},
	async summary(req: CartSummaryRequest, res: Response<BaseResponse>) {
		try {
			const response = await cartSummaryService({ id: Number(req.params.id) });

			responseSender(res, {
				ok: true,
				code: HTTP_CODES.OK,
				status: "OK",
				message: SUCCESS_MSG.CART_SUMMARY,
				data: response,
			});
		} catch (error: unknown) {
			errorSender(res, error);
		}
	},
};
