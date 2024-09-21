import type { Request } from "express";
import type { CartItem } from "../../../contexts/cartItem/domain/cartItem";

export type AddItemToCartRequest = Request & {
	body: {
		cartId: number;
		items: Array<Omit<CartItem, "cartId">>;
	};
};

export type CartSummaryRequest = Request & {
	params: {
		id: number;
	};
};
