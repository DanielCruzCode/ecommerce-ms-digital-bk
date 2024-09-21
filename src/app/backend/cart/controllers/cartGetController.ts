import type { Request, Response } from "express";
import { listCartsService } from "../../../../contexts/cartItem/services/listCartsService";
import { errorSender, responseSender } from "../../../../lib/requestHandler";
import {
	type BaseResponse,
	HTTP_CODES,
} from "../../../../lib/requestHandler/responseTypes";
import { SUCCESS_MSG } from "../lang/messages";

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
};
