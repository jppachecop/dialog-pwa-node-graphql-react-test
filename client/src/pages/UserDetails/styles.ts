import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: 4fr 1fr auto;
    margin-left: 25px;
`;

export const Title = styled.p`
    color: white;
    font-weight: bold;
    font-size: 24px;
`;

export const NoResults = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    height: 250px;

    p {
        margin-top: 10px;
    }
`;
