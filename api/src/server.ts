import "reflect-metadata";
import express from "express";
import cors from "cors";

import { initApolloServer } from "./apollo-server";

async function init() {
  const app = express();

  app.use(cors());

  await initApolloServer(app);

  app.listen({ port: 4000 }, () => {
    console.log(`Your server is running on port 4000`);
  });
}
init();
