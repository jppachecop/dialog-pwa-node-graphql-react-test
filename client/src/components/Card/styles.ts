import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    width: 250px;
    height: 350px;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid black;
    padding: 25px 12px;
    background: #1c1f26;
    border-radius: 30px;
    cursor: pointer;

    img {
        width: 100%;
        max-width: 150px;
        align-self: center;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 15px;

    p {
        color: #a8a9ab;
        word-wrap: break-word;
    }
`;
