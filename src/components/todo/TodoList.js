import React from 'react';
import PropTypes from 'prop-types';
import Todo from "./Todo";
import filterLinkStateTypes from "../filterLink/filterLinkStateTypes";

const TodoList = ({todos, visibilityFilter, toggleTodo}) => (
    <div>
        <ul>
            {getVisibleTodos(todos, visibilityFilter).map(todo =>
                <Todo
                    key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    {...todo}
                />
            )}
        </ul>
    </div>
);

const getVisibleTodos = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
        case filterLinkStateTypes.SHOW_ALL:
            return todos;
        case filterLinkStateTypes.SHOW_COMPLETE:
            return todos.filter(t => t.complete);
        case filterLinkStateTypes.SHOW_ACTIVE:
            return todos.filter(t => !t.complete);
        default:
            return todos;
    }
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    visibilityFilter: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
