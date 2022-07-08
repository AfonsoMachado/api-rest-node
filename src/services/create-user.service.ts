import { getRepository } from "typeorm";
import { IUser } from "../interfaces/create-user.interface";
import { UserEntity } from "../entities/user.entity";

class CreateUserService {
  async exec({ id, name, email }: IUser) {
    const user = await getRepository(UserEntity)
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values({ id, name, email })
      .execute();

    return user;
  }
}

export { CreateUserService };
