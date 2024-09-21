import { ErrorHandler } from "../../../lib/requestHandler";
import { CartRepository } from "../../cart/repository/cartRepository";
import { AppDataSource } from "../../shared/persistance/typeorm/data-source";
import { CartEntity } from "../../shared/persistance/typeorm/entity/cartEntity";
import { CartItemEntity } from "../../shared/persistance/typeorm/entity/cartItemEntity";
import type { CartItem } from "../domain/cartItem";
import { CartItemRepository } from "../repository/cartRepository";

const cartSource = AppDataSource.getRepository(CartEntity);
const cartItemSource = AppDataSource.getRepository(CartItemEntity);

export async function createCartItemService({
	cartId,
	items,
}: {
	cartId: number;
	items: Array<Omit<CartItem, "cartId" | "id">>;
}) {
	try {
		const cartRepository = new CartRepository(cartSource);
		const cartItemRepository = new CartItemRepository(cartItemSource);

		// const currentCart = await cartRepository.find(cartId);
		// return await cartItemRepository.create(currentCart, items);
	} catch (reason) {
		const error = reason as Error;
		ErrorHandler.controlled({
			message: "CART_ITEM_NOT_CREATED",
			name: error.name,
		});
	}
}
