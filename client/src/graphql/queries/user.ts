import { gql } from "@apollo/client";

export const LIST_USERS = gql`
    query list($name: String) {
        list(name: $name) {
            _id
            name
            age
            company
            email
            eyeColor
            greeting
            index
            name
            phone
            picture
            friends {
                _id
                name
                age
                company
                email
                eyeColor
                index
                name
                phone
                picture
            }
        }
    }
`;
