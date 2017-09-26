import {connect} from 'react-redux';
import TodoList from "./TodoList";
import {toggleTodo} from "./todoActions";

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todoApp.todos,
        visibilityFilter: state.todoApp.visibilityFilter,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
