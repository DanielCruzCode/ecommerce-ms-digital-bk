import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import type { Cart } from "../../../../cart/domain/cart";
import { CartItemEntity } from "./cartItemEntity";

@Entity({ name: "cart" })
export class CartEntity implements Cart {
	@PrimaryGeneratedColumn({ name: "id", type: "integer" })
	id: number;

	@Column({ name: "userId", type: "integer" })
	userId: number;

	@OneToMany(
		() => CartItemEntity,
		(cartItem) => cartItem.cart,
	)
	cartItem: CartItemEntity;
}
