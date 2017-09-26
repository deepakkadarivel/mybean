import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from "./Todo";

class TodoList extends Component {
    render() {
        const {
            todos,
            onTodoClick
        } = this.props;
        return (
            <div>
                <ul>
                    {todos.map(todo =>
                        <Todo
                            key={todo.id}
                            onClick={() => onTodoClick(todo.id)}
                            {...todo}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
