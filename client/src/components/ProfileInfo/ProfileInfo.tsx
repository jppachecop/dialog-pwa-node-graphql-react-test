import React from "react";
import { Container, Content } from "./styles";

export interface ProfileInfoInterface {
    photo: string;
    name: string;
    age: number;
    email: string;
}

export const ProfileInfo = ({
    photo,
    name,
    age,
    email,
}: ProfileInfoInterface) => {
    return (
        <Container>
            <img alt={"dfsfds"} src={photo} />
            <Content>
                <p>name: {name}</p>
                <p>age: {age}</p>
                <p>email: {email}</p>
            </Content>
        </Container>
    );
};
