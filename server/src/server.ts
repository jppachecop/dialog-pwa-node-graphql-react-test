import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import morgan from "morgan";
import { buildSchema } from "type-graphql";

import { UserResolver } from "./schema/resolvers/UserResolver";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = express();

  app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => console.log("Server started!"));
};

main();
