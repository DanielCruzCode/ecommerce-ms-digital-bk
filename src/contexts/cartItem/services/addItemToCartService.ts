import { ErrorHandler } from "../../../lib/requestHandler";
import { CartRepository } from "../../cart/repository/cartRepository";
import { modifyProductStockService } from "../../product/services/modifyProductStockService";
import { AppDataSource } from "../../shared/persistance/typeorm/data-source";
import { CartEntity } from "../../shared/persistance/typeorm/entity/cartEntity";
import { CartItemEntity } from "../../shared/persistance/typeorm/entity/cartItemEntity";
import type { CartItem } from "../domain/cartItem";
import { CartItemRepository } from "../repository/cartRepository";

const cartSource = AppDataSource.getRepository(CartEntity);
const cartItemSource = AppDataSource.getRepository(CartItemEntity);

export async function addItemToCartService({
	cartId,
	items,
}: {
	cartId: number;
	items: Array<Omit<CartItem, "cartId" | "id">>;
}) {
	try {
		const cartRepository = new CartRepository(cartSource);
		const cartItemRepository = new CartItemRepository(cartItemSource);

		const cart = await cartRepository.findById(cartId);

		if (!cart) {
			ErrorHandler.generateControlled({
				message: "CART_NOT_EXISTS",
				name: "Cart provided not exists!",
			});
		}

		for (const item of items) {
			await modifyProductStockService(item.productId, -item.quantity);
		}

		return await cartItemRepository.create(cart, items);
	} catch (error) {
		ErrorHandler.caughtControlled({
			error,
			name: "CART_ITEM_NOT_CREATED",
			message: "CART_ITEM_NOT_CREATED",
		});
	}
}
