import React from "react";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { LIST_USERS_BY_ID } from "../../graphql/queries/user";
import { UserInterface } from "../../types/User";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { Card } from "../../components/Card/Card";
import { Grid } from "../../components/Grid/Grid";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";
import { ErrorText } from "../../components/ErrorText/ErrorText";
import { DEFAULT_PICTURE } from "../../constants/constants";
import { Container, Title } from "./styles";
import { BsWifiOff, BsXCircle, BsEmojiFrown } from "react-icons/bs";

export const UserDetails = () => {
    const { id } = useParams();

    const { loading, error, data } = useQuery(LIST_USERS_BY_ID, {
        variables: {
            _id: id,
        },
    });

    if (loading) return <LoadingIndicator />;

    if (error) {
        if (error.networkError) {
            return (
                <ErrorText
                    Icon={<BsWifiOff />}
                    message={"Check your internet connection and try again."}
                />
            );
        } else {
            return (
                <ErrorText
                    Icon={<BsXCircle />}
                    message={
                        "We could not get the user's informations, try again."
                    }
                />
            );
        }
    }

    return (
        <Container>
            <ProfileInfo
                photo={data.listById?.picture ?? DEFAULT_PICTURE}
                name={data.listById?.name}
                age={data.listById?.age}
                email={data.listById?.email}
            />
            <Title>Friends:</Title>
            {data.listById?.friends.length > 0 ? (
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
                                photo={picture ?? DEFAULT_PICTURE}
                                name={name}
                                age={age}
                                eyeColor={eyeColor}
                                company={company}
                                email={email}
                            />
                        ),
                    )}
                </Grid>
            ) : (
                <ErrorText
                    Icon={<BsEmojiFrown />}
                    message={"This user does not have friends."}
                />
            )}
        </Container>
    );
};
