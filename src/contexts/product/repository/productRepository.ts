import type { Repository } from "typeorm";
import type { ProductEntity } from "../../shared/persistance/typeorm/entity/ProductEntity";
import type { Product } from "../domain/product";

export class ProductRepository {
	private repository: Repository<ProductEntity>;

	constructor(repository: Repository<ProductEntity>) {
		this.repository = repository;
	}

	create(payload: Product) {
		const product = this.repository.create({
			type: payload.type,
			price: payload.price,
			stock: payload.stock,
			thumbnail: payload.thumbnail,
			description: payload.description,
		});

		return this.repository.save(product);
	}

	findById(productId: number) {
		return this.repository.findOneBy({ id: productId });
	}

	increaseOrDecreaseStock(product: ProductEntity, quantity: number) {
		return this.repository.update(
			{ id: product.id },
			{ stock: product.stock + quantity },
		);
	}
}
