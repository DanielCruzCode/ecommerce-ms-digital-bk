import type { Response } from "express";

import { CustomError } from "./ErrorHandler";
import type { BaseResponse, HeaderType } from "./responseTypes";

export function responseSender(
	res: Response<BaseResponse>,
	payload: BaseResponse,
	headers?: HeaderType[],
) {
	if (!!headers && headers.length > 0) {
		for (const header of headers) {
			res.append(header.key, header.value);
		}
	}
	return res.status(payload.code).send(payload);
}

export function errorSender(
	res: Response<BaseResponse>,
	payload: CustomError | unknown,
) {
	const defaultServerErrorPayload: BaseResponse = {
		ok: false,
		code: 500,
		status: "INTERNAL_SERVER_ERROR",
		message: "Server error - No controlled",
	};

	if (!(payload instanceof CustomError)) {
		console.log(
			"🚧🚧🚧 Warning! Expected CustomError instance that you must provide 😥 ",
		);

		if (payload instanceof Error) {
			console.log("ERROR-NOT-CONTROLLED: ", payload.name);
		}
		console.log("ERROR-NOT-CONTROLLED: ", payload);

		return res
			.status(defaultServerErrorPayload.code)
			.json(defaultServerErrorPayload);
	}

	console.log("ERROR-CONTROLLED: ", payload.name);

	return res.status(payload.code).json({
		ok: payload.ok,
		code: payload.code,
		status: payload.status,
		message: payload.message,
	});
}
