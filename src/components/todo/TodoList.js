import React from 'react';
import PropTypes from 'prop-types';
import Todo from "./Todo";

const TodoList = ({todos, onTodoClick}) => {
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
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
