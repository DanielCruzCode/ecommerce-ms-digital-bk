import { ErrorHandler } from "../../../lib/requestHandler";
import { AppDataSource } from "../../shared/persistance/typeorm/data-source";
import { ProductEntity } from "../../shared/persistance/typeorm/entity/ProductEntity";
import { ProductRepository } from "../repository/productRepository";

export async function modifyProductStockService(
	productId: number,
	quantity: number,
) {
	try {
		const source = AppDataSource.getRepository(ProductEntity);
		const repository = new ProductRepository(source);

		const product = await repository.findById(productId);

		if (!product) {
			ErrorHandler.generateControlled({
				name: "PRODUCT_NOT_FOUND",
				message: "PRODUCT_NOT_FOUND",
			});
		}

		const isQuantityValid = product.stock + quantity >= 0;

		if (!isQuantityValid) {
			ErrorHandler.generateControlled({
				name: "PRODUCT_STOCK_INVALID",
				message: "PRODUCT_STOCK_INVALID",
			});
		}

		return await repository.increaseOrDecreaseStock(product, quantity);
	} catch (reason) {
		const error = reason as Error;
		ErrorHandler.caughtControlled({
			error,
			message: "PRODUCT_STOCK_NOT_MODIFIED",
			name: "PRODUCT_STOCK_NOT_MODIFIED",
		});
	}
}
