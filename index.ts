import express from "express";

const server = express();

const port = 5000;

server.listen(port, () => {
  console.log(`Servidor on na porta ${port}`);
});
