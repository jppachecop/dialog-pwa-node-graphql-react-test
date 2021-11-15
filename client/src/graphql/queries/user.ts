import { gql } from "@apollo/client";

export const LIST_USERS = gql`
    query list {
        list {
            _id
            name
            age
        }
    }
`;
