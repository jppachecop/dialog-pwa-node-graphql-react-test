import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid black;
    padding: 25px 12px;
    background: white;
    border-radius: 30px;
    cursor: pointer;

    img {
        width: 100%;
        max-width: 150px;
        align-self: center;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
        color: black;
    }
`;
