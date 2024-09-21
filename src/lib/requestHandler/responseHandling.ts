import type { Response } from "express";
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

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function errorSender(res: Response<BaseResponse>, error: any) {
	const defaultServerErrorPayload: BaseResponse = {
		ok: false,
		code: 500,
		status: "INTERNAL_SERVER_ERROR",
		message: "Server error - No controlled",
	};

	return res.status(error?.code ?? defaultServerErrorPayload.code).json({
		ok: error?.ok ?? defaultServerErrorPayload.ok,
		code: error?.code ?? defaultServerErrorPayload.code,
		status: error?.status ?? defaultServerErrorPayload.status,
		message: error?.message ?? defaultServerErrorPayload.message,
	});
}
