import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import PropTypes from 'prop-types';
import {Classes, Button, InputGroup} from "@blueprintjs/core";
import CallOut from "../Global/Callout/Callout";
import appConstants from "../../appConstants";
import LoginSDL from "./LoginSDL";
import './login.css'

class Login extends Component {
    constructor() {
        super();
        this.confirm = this.confirm.bind(this);
        this.saveUserData = this.saveUserData.bind(this);
        this.onInputValueChange = this.onInputValueChange.bind(this);
        this.shouldDisableButton = this.shouldDisableButton.bind(this);
    }

    state = {
        name: '',
        email: '',
        phone: '',
        password: '',
        login: true,
        loading: false,
        disabled: true,
        shouldCallOut: false,
        callOut: {
            name: appConstants.CALL_OUT_DANGER,
            header: appConstants.CALL_OUT_HEADER_ERROR,
            message: appConstants.CALL_OUT_DEFAULT_ERROR_MESSAGE
        }
    };

    confirm = async () => {
        this.hideCallOut();
        this.setLoading();
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
        this.setLoading();
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

    setLoading = () => {
        this.setState({
            loading: !this.state.loading,
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

    onInputValueChange = (event) => {
        this.setState({
            disabled: this.shouldDisableButton(),
            [event.target.name]: event.target.value,
        });
    };

    shouldDisableButton() {
        if (this.state.login) {
            return !(this.state.email.length && this.state.password.length);
        } else {
            return !(this.state.name.length && this.state.email.length && this.state.phone.length && this.state.password.length);
        }
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
                    <InputGroup
                        name={appConstants.INPUT_NAME}
                        className={`${Classes.LARGE} input_group`}
                        leftIconName="user"
                        type='text'
                        onChange={this.onInputValueChange}
                        placeholder={appConstants.INPUT_NAME_PLACEHOLDER}
                    />
                    }
                    <InputGroup
                        name={appConstants.INPUT_EMAIL}
                        className={`${Classes.LARGE} input_group`}
                        leftIconName="envelope"
                        type='text'
                        onChange={this.onInputValueChange}
                        placeholder={appConstants.INPUT_EMAIL_PLACEHOLDER}
                    />
                    {!this.state.login &&
                    <InputGroup
                        name={appConstants.INPUT_PHONE}
                        className={`${Classes.LARGE} input_group`}
                        leftIconName="phone"
                        type='tel'
                        onChange={this.onInputValueChange}
                        placeholder={appConstants.INPUT_PHONE_PLACEHOLDER}
                    />
                    }
                    <InputGroup
                        name={appConstants.INPUT_PASSWORD}
                        className={`${Classes.LARGE} input_group`}
                        leftIconName="lock"
                        type='password'
                        onChange={this.onInputValueChange}
                        placeholder={appConstants.INPUT_PASSWORD_PLACEHOLDER}
                    />
                    <Button
                        className='pt-button pt-large loginButton'
                        disabled={this.state.disabled}
                        loading={this.state.loading}
                        onClick={this.confirm}
                        text={this.state.login ? appConstants.LOGIN : appConstants.SIGN_UP}
                    />
                    <div className='row justifyCenter'>
                        <span>
                          {this.state.login ? appConstants.SIGN_UP_TEXT : appConstants.LOGIN_TEXT}
                            <a
                                role='link'
                                tabIndex='0'
                                onClick={() => {
                                    this.hideCallOut();
                                    this.setState({login: !this.state.login})
                                }}
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

