import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: flex-start;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-items: center;
        margin-bottom: 150px;
    }
`;
