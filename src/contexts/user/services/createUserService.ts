import { ErrorHandler } from "../../../lib/requestHandler";
import { createCartService } from "../../cart/services/createCartService";
import { AppDataSource } from "../../shared/persistance/typeorm/data-source";
import { UserEntity } from "../../shared/persistance/typeorm/entity/UserEntity";
import type { User } from "../domain/user";
import { UserRepository } from "../repository/userRepository";

export async function createUserService(payload: User) {
	try {
		const source = AppDataSource.getRepository(UserEntity);
		const repository = new UserRepository(source);
		const user = await repository.create(payload);

		if (!user) {
			ErrorHandler.generateControlled({
				message: "USER_NOT_CREATED",
				name: "USER_NOT_CREATED",
			});
		}
		const cart = await createCartService({ userId: user.id });

		return {
			user,
			cart,
		};
	} catch (reason) {
		const error = reason as Error;
		ErrorHandler.caughtControlled({
			error,
			message: "USER_NOT_CREATED",
			name: "USER_NOT_CREATED",
		});
	}
}
