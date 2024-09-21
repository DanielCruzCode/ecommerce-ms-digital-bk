import { ErrorHandler } from "../../../lib/requestHandler";
import { CartRepository } from "../../cart/repository/cartRepository";
import { AppDataSource } from "../../shared/persistance/typeorm/data-source";
import { CartEntity } from "../../shared/persistance/typeorm/entity/cartEntity";

export async function listCartsService() {
	try {
		const cartSource = AppDataSource.getRepository(CartEntity);
		const cartRepository = new CartRepository(cartSource);

		return await cartRepository.list();
	} catch (error) {
		ErrorHandler.caughtControlled({
			error,
			name: "LIST_OF_CARTS_NOT_FOUND",
			message: "LIST_OF_CARTS_NOT_FOUND",
		});
	}
}
