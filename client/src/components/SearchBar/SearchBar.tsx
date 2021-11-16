import React from 'react';
import { useCallOnKeyPress } from '../../hooks/useCallOnKeyPress';
import { SearchInput } from './styles';

export interface SearchBarInterface {
    onChange: (value: string) => void;
    onKeyUp: () => void;
    value: string;
}

export const SearchBar = ({ onChange, onKeyUp, value }: SearchBarInterface) => {
    const handleKeyPress = useCallOnKeyPress({
        keyCode: 13,
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
