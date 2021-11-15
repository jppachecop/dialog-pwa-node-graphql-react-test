import React from "react";

import { useQuery } from "@apollo/client";
import { LIST_USERS } from "../../graphql/queries/user";
import { UserInterface } from "../../models/User";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";

interface Props {
    name?: string;
}

export const Home = ({ name }: Props) => {
    const { loading, error, data } = useQuery(LIST_USERS, {
        variables: { name },
    });

    if (loading) return <LoadingIndicator />;
    if (error) return <p>Error :(</p>;

    return data.list.map(({ _id, name }: UserInterface) => (
        <div key={_id}>
            <p>
                {_id}: {name}
            </p>
        </div>
    ));
};
