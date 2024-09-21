import type { Repository } from "typeorm";
import type { CartSummary } from "../../cartItem/domain/cartSummary";
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

	summary(id: number): Promise<CartSummary[]> {
		return this.repository.query(`
			SELECT c.id as cartId,
       c.userId as userId,
       ci.id as cartItemId,
       p.id as productId,
       p.type,
       p.stock,
       p.description,
       ci.quantity,
       p.price,
       (ci.quantity * p.price) as subtotal
			FROM cart c
							 LEFT JOIN cart_item ci ON c.id = ci.cartId
							 LEFT JOIN product p ON p.id = ci.productId
			WHERE c.id = ${id};
		`);
	}
}
