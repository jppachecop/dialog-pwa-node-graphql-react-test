import styled from "styled-components";

export const SearchInput = styled.input`
    font-size: 14px;
    line-height: 1;
    background-color: white;
    width: 100%;
    border-radius: 5px;
    color: black;

    &:focus,
    &:active {
        outline: none;
    }
    &::placeholder {
        color: black;
    }
`;
