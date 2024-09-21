import type { BaseResponse, HTTP_CODE_NAME } from "./responseTypes";

export interface CustomErrorType extends Error, BaseResponse {}

export class CustomError extends Error {
	ok: boolean;
	code: number;
	status: HTTP_CODE_NAME;
	message: string;
	name: string;

	constructor(state: CustomErrorType) {
		super(state.message);
		this.ok = state.ok;
		this.code = state.code;
		this.status = state.status;
		this.message = state.message;
		this.name = state.name;
	}
}

export const ErrorHandler = {
	controlled(payload: Partial<CustomErrorType>) {
		const defaultServerErrorPayload: CustomErrorType = {
			ok: false,
			code: 500,
			status: "INTERNAL_SERVER_ERROR",
			message: "Server error - No controlled",
			name: "INTERNAL_SERVER_ERROR",
		};

		throw new CustomError({ ...defaultServerErrorPayload, ...payload });
	},
};
