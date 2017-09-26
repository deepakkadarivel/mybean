import {connect} from 'react-redux';
import {addTodo} from "./todoActions";
import AddTodo from "./AddTodo";

const mapStateToProps = (state, ownProps) => ({
    todos: state.myBeanApp.todos,
    visibilityFilter: state.myBeanApp.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
    addTodo(text, id) {
        dispatch(addTodo(text, id))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
