import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/client";
import GlobalStyle from "./styles/global";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <GlobalStyle />
                <div>
                    <h2>My first Apollo app 🚀</h2>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="details" element={<></>} />
                </Routes>
            </ApolloProvider>
        </>
    );
}

export default App;
