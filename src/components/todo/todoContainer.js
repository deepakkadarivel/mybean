import {connect} from 'react-redux';
import todoComponent from "./todoComponent";
import {addTodo} from "./todoActions";

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todoApp.todos,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (text, id) => {
            dispatch(addTodo(text, id))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(todoComponent);
