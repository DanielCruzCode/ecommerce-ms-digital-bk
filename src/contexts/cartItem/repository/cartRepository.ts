import type { Repository } from "typeorm";
import type { Cart } from "../../cart/domain/cart";
import type { CartItemEntity } from "../../shared/persistance/typeorm/entity/cartItemEntity";
import type { CartItem } from "../domain/cartItem";

export class CartItemRepository {
	private repository: Repository<CartItemEntity>;

	constructor(repository: Repository<CartItemEntity>) {
		this.repository = repository;
	}

	async create(cart: Cart, items: Array<Omit<CartItem, "cartId" | "id">>) {
		const payload: Array<Omit<CartItem, "id">> = items.map((it) => ({
			cartId: cart.id,
			productId: it.productId,
			quantity: it.quantity,
		}));

		const cartItems = this.repository.create(payload);
		return this.repository.save(cartItems);
	}
}
