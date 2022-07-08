import { CreateUserController } from "./create-user.controller";

describe("CreateUserController", () => {
  it("should return user id", async () => {
    const createUserController = new CreateUserController();

    const result = createUserController.handle();
  });
});
