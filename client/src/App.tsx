import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./services/client";
import GlobalStyle from "./styles/global";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { UserDetails } from "./pages/UserDetails/UserDetails";
import { GlobalContext } from "./context/global";
import { Header } from "./components/Header/Header";

function App() {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <GlobalContext>
                <>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="profile/:id" element={<UserDetails />} />
                    </Routes>
                </>
            </GlobalContext>
        </ApolloProvider>
    );
}

export default App;
