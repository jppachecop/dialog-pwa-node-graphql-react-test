import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { LIST_USERS_BY_ID } from "../../graphql/queries/user";
import { UserInterface } from "../../models/User";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Card } from "../../components/Card/Card";
import { Grid } from "../../components/Grid/Grid";
import { ProfileInfo } from "../../components/ProfileInfo/ProfileInfo";

export const UserDetails = () => {
    const [searchName, setSearchName] = useState("");
    const { id } = useParams();

    const { loading, error, data } = useQuery(LIST_USERS_BY_ID, {
        variables: {
            _id: id,
        },
    });

    // const onSearch = (value: string) => {
    //     setSearchName(value);
    //     refetch({
    //         name: value,
    //     });
    // };

    if (loading) return <LoadingIndicator />;
    if (error)
        return (
            <p>
                Houve um erro na sua busca, tente novamente. Caso o erro
                persista, contacte nosso suporte.
            </p>
        );

    return (
        <>
            {/* <SearchBar onChange={onSearch} value={searchName} /> */}
            <ProfileInfo
                photo={data.listById?.picture}
                name={data.listById?.name}
                age={data.listById?.age}
                email={data.listById?.email}
            />
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
                            photo={picture}
                            name={name}
                            age={age}
                            eyeColor={eyeColor}
                            company={company}
                            email={email}
                        />
                    )
                )}
            </Grid>
        </>
    );
};
