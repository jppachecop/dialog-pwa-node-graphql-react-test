import React from "react";
import { ApolloProvider, useQuery } from "@apollo/client";
import { LIST_USERS } from "./graphql/queries/user";
import { UserInterface } from "./models/User";
import { client } from "./services/client";
import GlobalStyle from "./styles/global";

function ExchangeRates() {
    const { loading, error, data } = useQuery(LIST_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.list.map(({ _id, name }: UserInterface) => (
        <div key={_id}>
            <p>
                {_id}: {name}
            </p>
        </div>
    ));
}

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <GlobalStyle />
                <div>
                    <h2>My first Apollo app 🚀</h2>
                </div>
                <ExchangeRates />
            </ApolloProvider>
        </>
    );
}

export default App;
