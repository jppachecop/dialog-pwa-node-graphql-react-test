import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 150px;
        height: 150px;
        margin-right: 15px;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        img {
            margin-right: 0px;
            margin-bottom: 15px;
            margin-top: 15px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
        color: #a8a9ab;
    }
`;
