import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";

import { UserResolver } from "./schema/resolvers/UserResolver";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = express();

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () =>
    console.log(
      `Server started on http://localhost:4000${apolloServer.graphqlPath}`
    )
  );
};

main();
