import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import type { User } from "../../../../user/domain/user";

@Entity({ name: "user" })
export class UserEntity implements User {
	@PrimaryGeneratedColumn({ name: "id", type: "integer" })
	id: number;
	@Column({ name: "firstName" })
	firstName: string;
	@Column({ name: "lastName" })
	lastName: string;
}
