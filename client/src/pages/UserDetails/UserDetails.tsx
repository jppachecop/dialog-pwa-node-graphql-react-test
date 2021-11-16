import React from "react";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { LIST_USERS_BY_ID } from "../../graphql/queries/user";
import { UserInterface } from "../../types/User";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { Card } from "../../components/Card/Card";
import { Grid } from "../../components/Grid/Grid";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";
import { DEFAULT_PICTURE } from "../../constants/constants";
import { Container, Title } from "./styles";

export const UserDetails = () => {
    const { id } = useParams();

    const { loading, error, data } = useQuery(LIST_USERS_BY_ID, {
        variables: {
            _id: id,
        },
    });

    if (loading) return <LoadingIndicator />;
    if (error)
        return (
            <p>
                Houve um erro na sua busca, tente novamente. Caso o erro
                persista, contacte nosso suporte.
            </p>
        );

    return (
        <Container>
            <ProfileInfo
                photo={
                    data.listById?.picture
                        ? data.listById?.picture
                        : DEFAULT_PICTURE
                }
                name={data.listById?.name}
                age={data.listById?.age}
                email={data.listById?.email}
            />
            <Title>Friends:</Title>
            <Grid>
                {data.listById.friends.map(
                    ({
                        _id,
                        picture,
                        name,
                        age,
                        eyeColor,
                        company,
                        email,
                    }: UserInterface) => (
                        <Card
                            key={_id}
                            photo={picture ? picture : DEFAULT_PICTURE}
                            name={name}
                            age={age}
                            eyeColor={eyeColor}
                            company={company}
                            email={email}
                        />
                    )
                )}
            </Grid>
        </Container>
    );
};
