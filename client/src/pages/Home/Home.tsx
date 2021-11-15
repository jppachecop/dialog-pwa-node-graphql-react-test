import React, { useState } from "react";

import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LIST_USERS } from "../../graphql/queries/user";
import { UserInterface } from "../../models/User";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Card } from "../../components/Card/Card";
import { Grid } from "../../components/Grid/Grid";

interface Props {
    name?: string;
}

export const Home = ({ name }: Props) => {
    const [searchName, setSearchName] = useState("");
    const navigate = useNavigate();

    const { loading, error, data, refetch } = useQuery(LIST_USERS, {
        variables: { name },
    });

    const onSearch = (value: string) => {
        setSearchName(value);
        refetch({
            name: value,
        });
    };

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
            <SearchBar onChange={onSearch} value={searchName} />
            <Grid>
                {data.list.length > 0 ? (
                    data.list.map(
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
                                onClick={() => navigate(`/profile/${_id}`)}
                            />
                        )
                    )
                ) : (
                    <p>Sem resultados :/</p>
                )}
            </Grid>
        </>
    );
};
