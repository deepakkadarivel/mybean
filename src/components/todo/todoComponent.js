import React, {Component} from 'react';
import PropTypes from 'prop-types';
import filterLinkStateTypes from "../filterLink/filterLinkStateTypes";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Footer from "./Footer";

class todoComponent extends Component {
    render() {
        const {
            todos,
            visibilityFilter,
        } = this.props;
        const visibleTodos = this.getVisibleTodos(todos, visibilityFilter);
        return (
            <div className="todoApp">
                <AddTodo
                    onAddClick={text => {
                        this.props.addTodo(
                            text,
                            this.getRandomInt(1, 100)
                        );
                    }}
                />
                <Footer/>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={id => this.props.toggleTodo(id)}
                />
            </div>
        );
    }

    getVisibleTodos = (todos, visibilityFilter) => {
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

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

todoComponent.propTypes = {
    todos: PropTypes.array.isRequired,
    visibilityFilter: PropTypes.string.isRequired,
    addTodo: PropTypes.func.isRequired,
};

export default todoComponent;
