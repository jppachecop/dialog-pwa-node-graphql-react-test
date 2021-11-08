import { ApolloServer } from "apollo-server-express";
import type { Express } from "express";
import schema from "./schema";

export const initApolloServer = async (app: Express) => {
  const server = new ApolloServer({
    schema,
  });

  await server.start();

  server.applyMiddleware({
    app,
    cors: true,
  });
};
