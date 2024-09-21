import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import type { CartItem } from "../../../../cartItem/domain/cartItem";
import { CartEntity } from "./cartEntity";

@Entity({ name: "cart_item" })
export class CartItemEntity implements CartItem {
	@PrimaryGeneratedColumn({ name: "id", type: "integer" })
	id: number;

	@Column({ name: "cartId", type: "integer" })
	cartId: number;

	@Column({ name: "productId", type: "integer" })
	productId: number;

	@Column({ name: "quantity", type: "integer" })
	quantity: number;

	@ManyToOne(
		() => CartEntity,
		(cart) => cart.cartItem,
	)
	cart: CartEntity;
}
