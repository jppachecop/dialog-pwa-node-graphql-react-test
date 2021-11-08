import { IResolvers } from "@graphql-tools/utils";

export const resolvers: IResolvers = {
  Query: {
    list: () => "Hello world from Apollo Server",
  },
};
