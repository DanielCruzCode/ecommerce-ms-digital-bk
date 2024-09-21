export interface CartSummary {
	cartId: number;
	userId: number;
	cartItemId: number;
	productId: number;
	type: string;
	stock: number;
	description: string;
	quantity: number;
	price: number;
	subtotal: number;
}
