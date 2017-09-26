import {connect} from 'react-redux';
import {addTodo} from "./todoActions";
import AddTodo from "./AddTodo";

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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
