import styled from "styled-components";

export const SearchInput = styled.input`
    font-size: 15px;
    line-height: 1;
    background-color: #20262d;
    width: 100%;
    min-height: 35px;
    max-width: 650px;
    border-radius: 15px;
    color: white;
    margin-left: 10px;
    padding-left: 10px;

    &:focus,
    &:active {
        outline: none;
    }
`;
