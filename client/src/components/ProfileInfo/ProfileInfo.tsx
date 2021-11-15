import React from "react";
import { ProfileInfoInterface } from "../../models/ProfileInfo";
import { Container, Content } from "./styles";

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
