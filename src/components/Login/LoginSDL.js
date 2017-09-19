import {gql} from 'react-apollo';

const CREATE_PERSON_MUTATION = gql`
  mutation CreatePersonMutation($name: String!, $email: String!, $phone: String!, $password: String!) {
    createPerson(name: $name, email: $email, phone: $phone, password: $password) {
      authenticated
      message
      access_token
      person {
        id
        name
        email
        phone
      }
    }
  }
`;

const AUTHENTICATE_PERSON_MUTATION = gql`
  mutation AuthenticatePersonMutation($email: String!, $password: String!) {
    authenticatePerson(email: $email, password: $password) {
      authenticated
      message
      access_token
      person {
        id
        name
        email
        phone
      }
    }
  }
`;

export default {
    CREATE_PERSON_MUTATION,
    AUTHENTICATE_PERSON_MUTATION,
};