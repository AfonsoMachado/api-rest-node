import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.json({ message: "OK" });
});

router.get("/users", (req: Request, res: Response) => {
  return res.json([]);
});

export { router };
