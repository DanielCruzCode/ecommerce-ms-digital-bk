import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {DB_CONFIG} from "../../../../config";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_CONFIG.DB_HOST,
    port: DB_CONFIG.DB_PORT,
    username: DB_CONFIG.DB_USER,
    password: DB_CONFIG.DB_PASS,
    database: DB_CONFIG.DB_NAME,
    synchronize: false,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
