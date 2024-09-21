import { ErrorHandler } from "../../../lib/requestHandler";
import { CartRepository } from "../../cart/repository/cartRepository";
import { AppDataSource } from "../../shared/persistance/typeorm/data-source";
import { CartEntity } from "../../shared/persistance/typeorm/entity/cartEntity";

export async function cartSummaryService({ id }: { id: number }) {
	try {
		const cartSource = AppDataSource.getRepository(CartEntity);
		const cartRepository = new CartRepository(cartSource);

		const summary = await cartRepository.summary(id);
		const total = summary.reduce((prev, curr) => prev + curr.subtotal, 0);

		return {
			items: summary,
			total,
		};
	} catch (error) {
		ErrorHandler.caughtControlled({
			error,
			name: "CART_SUMMARY_NOT_FOUND",
			message: "CART_SUMMARY_NOT_FOUND",
		});
	}
}
