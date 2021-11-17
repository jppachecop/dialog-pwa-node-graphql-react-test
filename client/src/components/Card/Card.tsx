import React from "react";
import { CardContainer, Content, ImageContainer } from "./styles";

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
        <CardContainer onClick={onClick}>
            <ImageContainer>
                <img alt={name} src={photo} />
            </ImageContainer>
            <Content>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Eye Color: {eyeColor}</p>
                <p>Company: {company}</p>
                <p>E-mail: {email}</p>
            </Content>
        </CardContainer>
    );
};
