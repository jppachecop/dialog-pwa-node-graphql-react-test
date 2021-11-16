import React, { createContext, Dispatch, useState } from 'react';

interface SearchContextInterface {
    searchText: string;
    setSearchText: Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
    searchText: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setSearchText: () => {},
};

const SearchContext = createContext<SearchContextInterface>(DEFAULT_VALUE);

const SearchContextProvider = ({ children }: { children: JSX.Element }) => {
    const [searchText, setSearchText] = useState(DEFAULT_VALUE.searchText);

    return (
        <SearchContext.Provider value={{ searchText, setSearchText }}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, SearchContextProvider };
