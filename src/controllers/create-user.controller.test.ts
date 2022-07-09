import { Request } from "express";
import { createConnection, getConnection } from "typeorm";
import { makeMockResponse } from "../utils/mocks/response.mock";
import { CreateUserController } from "./create-user.controller";
import createTestConnection from "../database";

describe("CreateUserController", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  // afterAll(async () => {
  //   const connection = getConnection();
  //   await connection.query("DELETE FROM users");
  //   await connection.close();
  // });

  it("should return user id", async () => {
    const createUserController = new CreateUserController();

    const request = {
      body: {
        name: "fofase",
        email: "email",
      },
    } as Request;

    const response = makeMockResponse();

    const result = await createUserController.handle(request, response);
  });
});
