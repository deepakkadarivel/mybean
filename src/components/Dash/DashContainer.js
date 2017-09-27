import {connect} from 'react-redux';
import Dash from "./Dash";

const mapStateToProps = (state, ownProps) => ({
    appUser: state.myBeanApp.appUser,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);
