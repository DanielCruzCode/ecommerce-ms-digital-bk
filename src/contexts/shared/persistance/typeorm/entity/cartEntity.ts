import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import type { Cart } from "../../../../cart/domain/cart";

@Entity({ name: "cart" })
export class CartEntity implements Cart {
	@PrimaryGeneratedColumn({ name: "id", type: "integer" })
	id: number;

	@Column({ name: "userId", type: "integer" })
	userId: number;
}
