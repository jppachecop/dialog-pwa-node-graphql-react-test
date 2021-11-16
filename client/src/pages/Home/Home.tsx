import React, { useContext, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { LIST_USERS } from "../../graphql/queries/user";
import { UserInterface } from "../../models/User";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { Card } from "../../components/Card/Card";
import { Grid } from "../../components/Grid/Grid";
import { SearchContext } from "../../context/search/search";

export const Home = () => {
    const { searchText } = useContext(SearchContext);
    const navigate = useNavigate();
    // const { queryName } = useParams();

    const { loading, error, data, refetch } = useQuery(LIST_USERS, {
        variables: { name: searchText },
    });

    useEffect(() => {
        refetch({
            name: searchText,
        });
    }, [refetch, searchText]);

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
