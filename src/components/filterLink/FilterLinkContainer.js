import {connect} from 'react-redux';
import setVisibilityFilter from "./filterLinkActions";
import FilterLinkComponent from "./FilterLinkComponent";

function mapStateToProps(state, ownProps) {
    return {
        currentFilter: state.todoApp.visibilityFilter,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setVisibilityFilter: (filter) => {
            dispatch(setVisibilityFilter(filter));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLinkComponent);
