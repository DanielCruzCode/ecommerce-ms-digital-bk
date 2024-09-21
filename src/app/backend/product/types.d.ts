import type { Request } from "express";

export type CreateProductRequest = Request & {
	body: {
		type: string;
		price: number;
		stock: number;
		thumbnail: string;
		description: string;
	};
};
