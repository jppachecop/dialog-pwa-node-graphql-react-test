import React from "react";
import { SearchContextProvider } from "./search/search";

export const GlobalContext = ({ children }: { children: JSX.Element }) => {
    return <SearchContextProvider>{children}</SearchContextProvider>;
};
