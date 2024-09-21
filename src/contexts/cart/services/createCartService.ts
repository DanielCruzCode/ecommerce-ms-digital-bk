import { ErrorHandler } from "../../../lib/requestHandler";
import { AppDataSource } from "../../shared/persistance/typeorm/data-source";
import { CartEntity } from "../../shared/persistance/typeorm/entity/cartEntity";
import { CartRepository } from "../repository/cartRepository";

export async function createCartService({ userId }: { userId: number }) {
	try {
		const source = AppDataSource.getRepository(CartEntity);
		const repository = new CartRepository(source);
		return await repository.create(userId);
	} catch (reason) {
		const error = reason as Error;
		ErrorHandler.controlled({
			message: "CART_NOT_CREATED",
			name: error.name,
		});
	}
}
