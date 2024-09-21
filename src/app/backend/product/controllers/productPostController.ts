import type { Response } from "express";
import { createProductService } from "../../../../contexts/product/services/createProductService";
import { errorSender, responseSender } from "../../../../lib/requestHandler";
import {
	type BaseResponse,
	HTTP_CODES,
} from "../../../../lib/requestHandler/responseTypes";
import { SUCCESS_MSG } from "../lang/messages";
import type { CreateProductRequest } from "../types";

export default {
	async create(req: CreateProductRequest, res: Response<BaseResponse>) {
		try {
			const response = await createProductService(req.body);

			responseSender(res, {
				ok: true,
				code: HTTP_CODES.CREATED,
				status: "CREATED",
				message: SUCCESS_MSG.CREATED,
				data: response,
			});
		} catch (error: unknown) {
			errorSender(res, error);
		}
	},
};
