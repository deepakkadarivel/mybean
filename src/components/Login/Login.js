import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import PropTypes from 'prop-types';
import Input from '../Global/Input/InputGroup';
import Button from '../Global/Button/Button';
import CallOut from "../Callout/Callout";
import appConstants from "../../appConstants";
import LoginSDL from "./LoginSDL";

class Login extends Component {
    constructor() {
        super();
        this.confirm = this.confirm.bind(this);
        this.saveUserData = this.saveUserData.bind(this);
        this.onInputValueChange = this.onInputValueChange.bind(this);
    }

    state = {
        name: '',
        email: '',
        phone: '',
        password: '',
        login: true,
        shouldCallOut: false,
        callOut: {
            name: appConstants.CALL_OUT_DANGER,
            header: appConstants.CALL_OUT_HEADER_ERROR,
            message: appConstants.CALL_OUT_DEFAULT_ERROR_MESSAGE
        }
    };

    confirm = async () => {
        this.hideCallOut();
        const {name, email, phone, password} = this.state;
        if (this.state.login) {
            const result = await this.props.authenticatePersonMutation({
                variables: {
                    email,
                    password,
                },
            });
            let data = result.data.authenticatePerson;
            data.authenticated ? this.renderHomeOnSuccess(data) : this.renderCallOut(data);
        } else {
            const result = await this.props.createPersonMutation({
                variables: {
                    name,
                    email,
                    phone,
                    password,
                },
            });
            let data = result.data.createPerson;
            data.authenticated ? this.renderHomeOnSuccess(data) : this.renderCallOut(data);
        }
    };

    renderCallOut = (data) => {
        this.setState({
            shouldCallOut: true,
            callOut: {
                name: appConstants.CALL_OUT_DANGER,
                header: appConstants.CALL_OUT_HEADER_ERROR,
                message: data.message
            }
        })
    };

    hideCallOut = () => {
        this.setState({
            shouldCallOut: false,
        })
    };

    renderHomeOnSuccess = (data) => {
        this.saveUserData(data);
        this.props.history.push('/');
    };

    saveUserData = (data) => {
        localStorage.setItem(appConstants.MW_AUTH_TOKEN, data.access_token);
        localStorage.setItem(appConstants.MW_USER_ID, data.person.id);
        localStorage.setItem(appConstants.MW_USER_NAME, data.person.name);
        localStorage.setItem(appConstants.MW_USER_EMAIL, data.person.email);
        localStorage.setItem(appConstants.MW_USER_PHONE, data.person.phone);
    };

    onInputValueChange = (field, value) => {
        this.setState({[field]: value});
    };

    render() {
        return (
            <div className='vertical-container'>
                <div className='flex-container-column'>
                    {this.state.shouldCallOut &&
                    <CallOut
                        name={this.state.callOut.name}
                        header={this.state.callOut.header}
                        message={this.state.callOut.message}
                    />
                    }
                    {!this.state.login &&
                    <Input
                        name={appConstants.INPUT_NAME}
                        icon={'pt-icon pt-icon-user'}
                        placeholder={appConstants.INPUT_NAME_PLACEHOLDER}
                        type='text'
                        onChange={this.onInputValueChange}
                    />
                    }
                    <Input
                        name={appConstants.INPUT_EMAIL}
                        icon={'pt-icon pt-icon-envelope'}
                        placeholder={appConstants.INPUT_EMAIL_PLACEHOLDER}
                        type='text'
                        onChange={this.onInputValueChange}
                    />
                    {!this.state.login &&
                    <Input
                        name={appConstants.INPUT_PHONE}
                        icon={'pt-icon pt-icon-phone'}
                        placeholder={appConstants.INPUT_PHONE_PLACEHOLDER}
                        type='tel'
                        onChange={this.onInputValueChange}
                    />
                    }
                    <Input
                        name={appConstants.INPUT_PASSWORD}
                        icon={'pt-icon pt-icon-lock'}
                        placeholder={appConstants.INPUT_PASSWORD_PLACEHOLDER}
                        type='password'
                        onChange={this.onInputValueChange}
                    />
                    <Button
                        buttonClass='pt-button pt-large loginButton'
                        name={this.state.login ? appConstants.LOGIN : appConstants.SIGN_UP}
                        onClick={this.confirm}
                    />
                    <div className='row justifyCenter'>
                        <span>
                          {this.state.login ? appConstants.SIGN_UP_TEXT : appConstants.LOGIN_TEXT}
                            <a
                                role='link'
                                tabIndex='0'
                                onClick={() => this.setState({login: !this.state.login})}
                            >
                            {this.state.login ? appConstants.SIGN_UP : appConstants.LOGIN}
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

export default compose(
    graphql(LoginSDL.CREATE_PERSON_MUTATION, {name: 'createPersonMutation'}),
    graphql(LoginSDL.AUTHENTICATE_PERSON_MUTATION, {name: 'authenticatePersonMutation'})
)(Login);

