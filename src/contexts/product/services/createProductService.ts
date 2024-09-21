import { ErrorHandler } from "../../../lib/requestHandler";
import { AppDataSource } from "../../shared/persistance/typeorm/data-source";
import { ProductEntity } from "../../shared/persistance/typeorm/entity/ProductEntity";
import type { Product } from "../domain/product";
import { ProductRepository } from "../repository/productRepository";

export async function createProductService(payload: Product) {
	try {
		const source = AppDataSource.getRepository(ProductEntity);
		const repository = new ProductRepository(source);
		return await repository.create(payload);
	} catch (reason) {
		const error = reason as Error;
		ErrorHandler.caughtControlled({
			error,
			message: "PRODUCT_NOT_CREATED",
			name: "PRODUCT_NOT_CREATED",
		});
	}
}
