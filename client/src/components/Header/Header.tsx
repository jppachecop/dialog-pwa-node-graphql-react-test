import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { SearchContext } from '../../context/search/search';
import { SearchBar } from '../SearchBar/SearchBar';
import { HeaderContainer, Text } from './styles';

export const Header = () => {
    const { searchText, setSearchText } = useContext(SearchContext);
    const navigate = useNavigate();

    const onSearch = (value: string) => {
        setSearchText(value);
    };

    const onKeyUp = () => {
        navigate({
            pathname: ROUTES.HOME,
        });
    };

    return (
        <HeaderContainer>
            <Text>MySocial</Text>
            <SearchBar
                onChange={onSearch}
                onKeyUp={onKeyUp}
                value={searchText}
            />
        </HeaderContainer>
    );
};
