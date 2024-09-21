import type {Repository} from "typeorm";
import type {UserEntity} from "../../shared/persistance/typeorm/entity/UserEntity";
import type {User} from "../domain/user";

export class UserRepository {
  private repository: Repository<UserEntity>;

  constructor(repository: Repository<UserEntity>) {
    this.repository = repository;
  }

  create(payload: User) {
    const user = this.repository.create({
      lastName: payload.lastName,
      firstName: payload.firstName,
    });

    return this.repository.save(user);
  }
}
