import React from "react";
import { KEYBOARD_ENTER_KEY } from "../../constants/constants";
import { useCallOnKeyPress } from "../../hooks/useCallOnKeyPress";
import { SearchInput } from "./styles";

export interface SearchBarInterface {
    onChange: (value: string) => void;
    onKeyUp: () => void;
    value: string;
}

export const SearchBar = ({ onChange, onKeyUp, value }: SearchBarInterface) => {
    const handleKeyPress = useCallOnKeyPress({
        keyCode: KEYBOARD_ENTER_KEY,
        callback: onKeyUp,
    });

    return (
        <SearchInput
            onChange={e => onChange(e.target.value)}
            value={value}
            placeholder="Search..."
            onKeyUp={handleKeyPress}
        />
    );
};
