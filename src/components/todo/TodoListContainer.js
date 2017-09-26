import {connect} from 'react-redux';
import TodoList from "./TodoList";
import {toggleTodo} from "./todoActions";

const mapStateToProps = (state, ownProps) => ({
    todos: state.myBeanApp.todos,
    visibilityFilter: state.myBeanApp.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo(id) {
        dispatch(toggleTodo(id))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
