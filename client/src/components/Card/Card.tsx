import React from "react";
import { CardInterface } from "../../models/Card";
import { Container, Content } from "./styles";

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
            <img alt={"dfsfds"} src={photo} />
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
