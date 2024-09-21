import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import type { Product, ProductType } from "../../../../product/domain/product";

@Entity({ name: "product" })
export class ProductEntity implements Product {
	@PrimaryGeneratedColumn({ name: "id", type: "integer" })
	id: number;
	@Column({ name: "type", type: "enum", enum: ["EVENT", "PRODUCT"] })
	type: ProductType;
	@Column({ name: "price", type: "float" })
	price: number;
	@Column({ name: "stock" })
	stock: number;
	@Column({ name: "thumbnail" })
	thumbnail: string;
	@Column({ name: "description" })
	description: string;
}
