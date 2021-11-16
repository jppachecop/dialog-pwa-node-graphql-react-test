import React from 'react';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from './styles/global';
import { Home } from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { UserDetails } from './pages/UserDetails/UserDetails';
import { GlobalContext } from './context/global';
import { Header } from './components/Header/Header';
import { ApolloClient, InMemoryCache } from '@apollo/client';

function App() {
    const client = new ApolloClient({
        uri: process.env.REACT_APP_API_URI || 'http://localhost:4000/graphql',
        cache: new InMemoryCache(),
    });

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
