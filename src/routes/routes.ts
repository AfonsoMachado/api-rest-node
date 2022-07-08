import { Request, Response, Router } from "express";
import { CreateUserController } from "../controllers/create-user.controller";

const router = Router();

const createUserController = new CreateUserController();

router.get("/", (req: Request, res: Response) => {
  return res.json({ message: "OK" });
});

router.post("/users", createUserController.handle);

export { router };
