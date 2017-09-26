import {connect} from 'react-redux';
import {loadLocalState} from '../../app/localStorage';
import Header from "./Header";
import {removeUser} from "../../Login/LoginActions";
import {deleteLocalState} from "../../app/localStorage";

const mapStateToProps = (state, ownProps) => ({
    user: loadLocalState()
});

const mapDispatchToProps = (dispatch) => ({
    logout() {
        deleteLocalState();
        dispatch(removeUser())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
