import LoginInitialState from "./LoginInitialState";
import LoginActionTypes from "./LoginActionTypes";

const appUser = (state = LoginInitialState, action) => {
    switch (action.type) {
        case LoginActionTypes.SET_USER:
            return {
                access_token: action.auth_token,
                id: action.id,
                name: action.name,
                email: action.email,
                phone: action.phone,
            };
        case LoginActionTypes.REMOVE_USER:
            return {};
        default:
            return state;
    }
};

export default appUser;