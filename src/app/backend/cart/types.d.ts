import type { Request } from "express";
import type { CartItem } from "../../../contexts/cartItem/domain/cartItem";

export type AddItemToCartRequest = Request & {
	body: {
		cartId: string;
		items: Array<Omit<CartItem, "cartId" | "id">>;
	};
};
