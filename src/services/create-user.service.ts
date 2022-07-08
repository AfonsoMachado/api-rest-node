import { IUser } from "../interfaces/create-user.interface";

class CreateUserService {
  exec({ name, email }: IUser) {
    const data = [];

    data.push({ name, email });

    return data;
  }
}

export { CreateUserService };
