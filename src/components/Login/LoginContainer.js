import {connect} from 'react-redux';
import {loadLocalState, saveLocalState} from '../app/localStorage';
import Login from "./Login";
import {setUser, removeUser} from "./LoginActions";

const mapStateToProps = (state, ownProps) => ({
    user: loadLocalState()
});

const mapDispatchToProps = (dispatch) => ({
    setUser(auth_token, id, name, email, phone) {
        saveLocalState({auth_token, id, name, email, phone});
        dispatch(setUser(auth_token, id, name, email, phone))
    },
    removeUser() {
        dispatch(removeUser())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
