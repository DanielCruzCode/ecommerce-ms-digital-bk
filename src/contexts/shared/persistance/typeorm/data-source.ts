import "reflect-metadata";
import { DataSource } from "typeorm";
import { DB_CONFIG } from "../../../../config";
import { ProductEntity } from "./entity/ProductEntity";
import { UserEntity } from "./entity/UserEntity";
import { CartEntity } from "./entity/cartEntity";

export const AppDataSource = new DataSource({
	type: "mysql",
	host: DB_CONFIG.DB_HOST,
	port: DB_CONFIG.DB_PORT,
	username: DB_CONFIG.DB_USER,
	password: DB_CONFIG.DB_PASS,
	database: DB_CONFIG.DB_NAME,
	synchronize: false,
	logging: true,
	entities: [UserEntity, CartEntity, ProductEntity],
	migrations: [],
	subscribers: [],
});
