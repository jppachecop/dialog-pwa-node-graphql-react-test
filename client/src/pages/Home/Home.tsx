import React, { useContext, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LIST_USERS } from '../../graphql/queries/user';
import { UserInterface } from '../../types/User';
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator';
import { Card } from '../../components/Card/Card';
import { Grid } from '../../components/Grid/Grid';
import { SearchContext } from '../../context/search/search';
import { DEFAULT_PICTURE } from '../../constants/constants';
import { NoResults, HomeContainer } from './styles';

export const Home = () => {
    const { searchText } = useContext(SearchContext);
    const navigate = useNavigate();

    const { loading, error, data, refetch } = useQuery(LIST_USERS, {
        variables: { name: searchText },
    });

    useEffect(() => {
        //  inserir debounce, fazer uma função separada com esse refecth e nela ter o debounce
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
        <HomeContainer>
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
                                photo={picture ?? DEFAULT_PICTURE}
                                name={name}
                                age={age}
                                eyeColor={eyeColor}
                                company={company}
                                email={email}
                                onClick={() => navigate(`/profile/${_id}`)}
                            />
                        ),
                    )
                ) : (
                    <NoResults>
                        There aren&apos;t users with this name :/
                    </NoResults>
                )}
            </Grid>
        </HomeContainer>
    );
};
