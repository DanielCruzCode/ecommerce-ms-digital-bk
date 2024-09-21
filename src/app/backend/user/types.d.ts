import type { Request } from "express";

export type CreateUserRequest = Request & {
	body: {
		firstName: string;
		lastName: string;
	};
};
