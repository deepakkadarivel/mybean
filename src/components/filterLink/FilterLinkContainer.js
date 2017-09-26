import {connect} from 'react-redux';
import setVisibilityFilter from "./filterLinkActions";
import FilterLinkComponent from "./FilterLinkComponent";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.todoApp.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
    setVisibilityFilter(filter) {
        dispatch(setVisibilityFilter(filter));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLinkComponent);
