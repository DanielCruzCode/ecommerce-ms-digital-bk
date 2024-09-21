import type { Response } from "express";
import { createUserService } from "../../../../contexts/user/services/createUserService";
import { errorSender, responseSender } from "../../../../lib/requestHandler";
import {
	type BaseResponse,
	HTTP_CODES,
} from "../../../../lib/requestHandler/responseTypes";
import { SUCCESS_MSG } from "../lang/messages";
import type { CreateUserRequest } from "../types";

export default {
	async create(req: CreateUserRequest, res: Response<BaseResponse>) {
		try {
			const response = await createUserService({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
			});

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
