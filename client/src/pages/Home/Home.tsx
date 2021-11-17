import React, { useContext } from "react";

import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LIST_USERS } from "../../graphql/queries/user";
import { UserInterface } from "../../types/User";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { Card } from "../../components/Card/Card";
import { Grid } from "../../components/Grid/Grid";
import { ErrorText } from "../../components/ErrorText/ErrorText";
import { SearchContext } from "../../context/search/search";
import { DEFAULT_PICTURE } from "../../constants/constants";
import { HomeContainer } from "./styles";
import { ROUTES } from "../../constants/routes";
import { BsWifiOff, BsXCircle } from "react-icons/bs";

export const Home = () => {
    const { debouncedSearchText } = useContext(SearchContext);
    const navigate = useNavigate();

    const { loading, error, data } = useQuery(LIST_USERS, {
        variables: { name: debouncedSearchText },
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
                    message={"Your search could not be completed, try again."}
                />
            );
        }
    }

    return (
        <HomeContainer>
            {data.list.length > 0 ? (
                <Grid>
                    {data.list.map(
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
                                onClick={() =>
                                    navigate(`${ROUTES.PROFILE}/${_id}`)
                                }
                            />
                        ),
                    )}
                </Grid>
            ) : (
                <ErrorText Icon={<BsXCircle />} message={"No users found."} />
            )}
        </HomeContainer>
    );
};
