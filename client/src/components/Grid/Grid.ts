import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-items: center;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
