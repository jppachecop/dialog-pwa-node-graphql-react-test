import { gql } from '@apollo/client';

export const LIST_USERS = gql`
    query list($name: String) {
        list(name: $name) {
            _id
            name
            age
            company
            email
            eyeColor
            picture
            friends {
                _id
                name
                age
                company
                email
                eyeColor
                picture
            }
        }
    }
`;

export const LIST_USERS_BY_ID = gql`
    query listById($_id: String!) {
        listById(_id: $_id) {
            _id
            name
            age
            email
            picture
            friends {
                _id
                name
                age
                company
                email
                eyeColor
                picture
            }
        }
    }
`;
