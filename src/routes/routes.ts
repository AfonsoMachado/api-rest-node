import { Request, Response, Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();

router.get("/", (req: Request, res: Response) => {
  return res.json({ message: "OK" });
});

router.get("/users", createUserController.handle);

export { router };
