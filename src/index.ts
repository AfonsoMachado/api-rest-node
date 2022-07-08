import "reflect-metadata";
import express, { Request, Response } from "express";
import { router } from "./routes/routes";
import createConnection from "./database";

createConnection();

const server = express();

const port = 5000;

server.use(express.json());
server.use(router);

server.listen(port, () => {
  console.log(`Servidor on na porta ${port} | http://localhost:${port}`);
});
