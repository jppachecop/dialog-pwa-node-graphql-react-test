import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URI || "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});