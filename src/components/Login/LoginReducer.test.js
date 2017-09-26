import appUser from "./LoginReducer";
import LoginActionTypes from "./LoginActionTypes";
import LoginInitialState from "./LoginInitialState";

describe('appUser Login reducer test', () => {
    it('action SET_USER to add store', () => {
        const stateBefore = LoginInitialState;
        const action = {
            type: LoginActionTypes.SET_USER,
            access_token: 'token',
            id: 0,
            name: 'test user',
            email: 'test@one.com',
            phone: '1234567890',
        };
        const stateAfter = {
            access_token: 'token',
            id: 0,
            name: 'test user',
            email: 'test@one.com',
            phone: '1234567890',
        };

        expect(appUser(stateBefore, action)).toEqual(stateAfter);
    });
});
