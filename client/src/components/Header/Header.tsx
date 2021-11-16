import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/search/search";
import { SearchBar } from "../SearchBar/SearchBar";

export const Header = () => {
    const { searchText, setSearchText } = useContext(SearchContext);
    const navigate = useNavigate();

    const onSearch = (value: string) => {
        setSearchText(value);
    };

    const onKeyDown = () => {
        navigate({
            pathname: "/",
        });
    };

    return (
        <SearchBar
            onChange={onSearch}
            onKeyDown={onKeyDown}
            value={searchText}
        />
    );
};
