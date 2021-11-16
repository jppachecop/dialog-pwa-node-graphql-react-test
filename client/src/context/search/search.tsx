import React, { createContext, Dispatch } from 'react';
import { useDebouncedState } from '../../hooks/useDebouncedState';

interface SearchContextInterface {
    debouncedSearchText: string;
    searchText: string;
    setSearchText: Dispatch<React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
    debouncedSearchText: '',
    searchText: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setSearchText: () => {},
};

const SearchContext = createContext<SearchContextInterface>(DEFAULT_VALUE);

const SearchContextProvider = ({ children }: { children: JSX.Element }) => {
    const [debouncedSearchText, searchText, setSearchText] =
        useDebouncedState<string>(DEFAULT_VALUE.searchText, 500);

    return (
        <SearchContext.Provider
            value={{ debouncedSearchText, searchText, setSearchText }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, SearchContextProvider };
