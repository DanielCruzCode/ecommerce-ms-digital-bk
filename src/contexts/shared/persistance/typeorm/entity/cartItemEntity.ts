import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import type { CartItem } from "../../../../cartItem/domain/cartItem";

@Entity()
export class CartItemEntity implements CartItem {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ name: "cartId", type: "integer" })
	cartId: number;

	@Column({ name: "productId", type: "integer" })
	productId: number;

	@Column({ name: "quantity", type: "integer" })
	quantity: number;
}
