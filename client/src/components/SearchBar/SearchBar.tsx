import React from "react";
import { SearchBarInterface } from "../../models/SearchBar";
import { SearchInput } from "./styles";

export const SearchBar = ({ onChange, value }: SearchBarInterface) => {
    return (
        <SearchInput
            onChange={(e) => onChange(e.target.value)}
            value={value}
            placeholder="Search..."
        />
    );
};
