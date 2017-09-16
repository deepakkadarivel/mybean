import React, {Component} from 'react';
import {gql, graphql, compose} from 'react-apollo';
import PropTypes from 'prop-types';
import Input from '../Global/Input/InputGroup';
import Button from '../Global/Button/Button';
import {MW_USER_ID, MW_AUTH_TOKEN, MW_USER_NAME, MW_USER_EMAIL, MW_USER_PHONE} from "../../constants";

class Login extends Component {
    constructor() {
        super();
        this.confirm = this.confirm.bind(this);
        this.saveUserData = this.saveUserData.bind(this);
        this.onInputValueChange = this.onInputValueChange.bind(this);
    }

    state = {
        login: true,
        name: '',
        email: '',
        phone: '',
        password: '',
    };

    confirm = async () => {
        const {name, email, phone, password} = this.state;
        console.log(this.state);
        if (this.state.login) {
            const result = await this.props.authenticatePersonMutation({
                variables: {
                    email,
                    password,
                },
            });
            this.parseResultsAndSave(result);
        } else {
            const result = await this.props.createPersonMutation({
                variables: {
                    name,
                    email,
                    phone,
                    password,
                },
            });
            this.parseResultsAndSave(result);
        }
        this.props.history.push('/');
    };

    parseResultsAndSave = (result) => {
        const token = result.data.authenticatePerson.access_token;
        const id = result.data.authenticatePerson.person.id;
        const name = result.data.authenticatePerson.person.name;
        const email = result.data.authenticatePerson.person.email;
        const phone = result.data.authenticatePerson.person.phone;
        this.saveUserData(token, id, name, email, phone);
    };

    saveUserData = (token, id, name, email, phone) => {
        localStorage.setItem(MW_AUTH_TOKEN, token);
        localStorage.setItem(MW_USER_ID, id);
        localStorage.setItem(MW_USER_NAME, name);
        localStorage.setItem(MW_USER_EMAIL, email);
        localStorage.setItem(MW_USER_PHONE, phone);
    };

    onInputValueChange = (field, value) => {
        this.setState({[field]: value});
    };

    render() {
        return (
            <div className='vertical-container'>
                <div className='flex-container-column'>
                    {!this.state.login &&
                    <Input
                        name='name'
                        icon={'pt-icon pt-icon-user'}
                        placeholder='Name'
                        type='text'
                        onChange={this.onInputValueChange}
                    />
                    }
                    <Input
                        name='email'
                        icon={'pt-icon pt-icon-envelope'}
                        placeholder='Email'
                        type='text'
                        onChange={this.onInputValueChange}
                    />
                    {!this.state.login &&
                    <Input
                        name='phone'
                        icon={'pt-icon pt-icon-phone'}
                        placeholder='Phone'
                        type='tel'
                        onChange={this.onInputValueChange}
                    />
                    }
                    <Input
                        name='password'
                        icon={'pt-icon pt-icon-lock'}
                        placeholder='Password'
                        type='password'
                        onChange={this.onInputValueChange}
                    />
                    <Button
                        buttonClass='pt-button pt-large loginButton'
                        name={this.state.login ? 'Login' : 'Sign Up'}
                        onClick={this.confirm}
                    />
                    <div className='row justifyCenter'>
                        <span>
                          {this.state.login ? 'need to create an account? ' : 'already have an account? '}
                            <a
                                role='link'
                                tabIndex='0'
                                onClick={() => this.setState({login: !this.state.login})}
                            >
                            {this.state.login ? ' Sign Up' : ' Login'}
                          </a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    authenticatePersonMutation: PropTypes.func,
    createPersonMutation: PropTypes.func,
};

const CREATE_PERSON_MUTATION = gql`
  mutation CreatePersonMutation($name: String!, $email: String!, $phone: String!, $password: String!) {
    createPerson(
      name: $name,
      email: $email,
      phone: $phone,
      password: $password,
    ) {
      id
    }
    
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

export default compose(
    graphql(CREATE_PERSON_MUTATION, {name: 'createPersonMutation'}),
    graphql(AUTHENTICATE_PERSON_MUTATION, {name: 'authenticatePersonMutation'})
)(Login);

