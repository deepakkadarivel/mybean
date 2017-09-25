import {connect} from 'react-redux';
import todoComponent from "./todoComponent";
import {addTodo, toggleTodo} from "./todoActions";

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todoApp.todos,
        visibilityFilter: state.todoApp.visibilityFilter,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (text, id) => {
            dispatch(addTodo(text, id))
        },
        toggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(todoComponent);
