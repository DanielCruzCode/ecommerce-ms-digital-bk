import type { Repository } from "typeorm";
import type { CartEntity } from "../../shared/persistance/typeorm/entity/cartEntity";

export class CartRepository {
	private repository: Repository<CartEntity>;

	constructor(repository: Repository<CartEntity>) {
		this.repository = repository;
	}

	create(userId: number) {
		const cart = this.repository.create({ userId });
		return this.repository.save(cart);
	}

	findById(cartId: number) {
		return this.repository.findOneBy({ id: cartId });
	}

	list() {
		return this.repository.find({
			relations: {
				cartItem: true,
			},
		});
	}
}
