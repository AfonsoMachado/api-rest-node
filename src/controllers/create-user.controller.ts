import { Request, Response } from "express";
import { CreateUserService } from "../services/create-user.service";

class CreateUserController {
  handle(req: Request, res: Response) {
    const createUserService = new CreateUserService();
    const { name, email } = req.body;

    if (!name.length || !email.length)
      res.status(400).json({ message: "fill in all fields" });

    const user = createUserService.exec({ name, email });

    return res.status(201).json({ user });
  }
}

export { CreateUserController };
