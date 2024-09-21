import {
	type BaseResponse,
	HTTP_CODES,
	type HTTP_CODE_NAME,
} from "./responseTypes";

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

const defaultServerErrorPayload: CustomErrorType = {
	ok: false,
	code: HTTP_CODES.BAD_REQUEST,
	status: "BAD_REQUEST",
	message: "Server error - Controlled",
	name: "BAD_REQUEST",
};

export const ErrorHandler = {
	generateControlled(payload: Partial<CustomErrorType>) {
		throw new CustomError({ ...defaultServerErrorPayload, ...payload });
	},

	caughtControlled({
		error,
		name,
		message,
	}: { error: CustomError | Error; name?: string; message?: string }) {
		if (!(error instanceof CustomError) || !(error instanceof Error)) {
			console.log(error);
			throw new CustomError(defaultServerErrorPayload);
		}

		throw new CustomError({
			...defaultServerErrorPayload,
			name: error?.name ?? name,
			message: error?.message ?? message,
			...error,
		});
	},
};
