import React from "react";
import { Container, Content } from "./styles";

interface CardInterface {
    photo: string;
    name: string;
    company: string;
    age: number;
    eyeColor: string;
    email: string;
    onClick?: () => void;
}

export const Card = ({
    photo,
    name,
    age,
    eyeColor,
    company,
    email,
    onClick,
}: CardInterface) => {
    return (
        <Container onClick={onClick}>
            <img alt={name} src={photo} />
            <Content>
                <p>name: {name}</p>
                <p>age: {age}</p>
                <p>eyeColor: {eyeColor}</p>
                <p>company: {company}</p>
                <p>email: {email}</p>
            </Content>
        </Container>
    );
};
