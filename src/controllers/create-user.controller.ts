import { Request, Response } from "express";
import { CreateUserService } from "../services/create-user.service";
import { v4 as uuid } from "uuid";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserService = new CreateUserService();

    const { name, email } = req.body;
    const id = uuid();

    if (!name.length)
      return res.status(400).json({ message: "fill in all fields" });

    const user = await createUserService.exec({ id, name, email });

    return res.status(201).json({ user });
  }
}

export { CreateUserController };
