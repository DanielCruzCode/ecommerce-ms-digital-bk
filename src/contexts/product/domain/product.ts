export type ProductType = "EVENT" | "PRODUCT";

export interface Product {
	id?: number;
	type: ProductType;
	price: number;
	stock: number;
	thumbnail: string;
	description: string;
}
