import LoginActionTypes from "./LoginActionTypes";

const setUser = (auth_token, id, name, email, phone) => ({
    type: LoginActionTypes.SET_USER,
    auth_token,
    id,
    name,
    email,
    phone,
});

const removeUser = () => ({
    type: LoginActionTypes.REMOVE_USER,
});

export {
    setUser,
    removeUser
};