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
        <>
            <ApolloProvider client={client}>
                <GlobalStyle />
                <div>
                    <h2>My first Apollo app 🚀</h2>
                </div>
                <GlobalContext>
                    <>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="profile/:id"
                                element={<UserDetails />}
                            />
                        </Routes>
                    </>
                </GlobalContext>
            </ApolloProvider>
        </>
    );
}

export default App;
