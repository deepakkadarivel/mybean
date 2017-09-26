import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FilterLinkContainer from "../filterLink/FilterLinkContainer";
import filterLinkStateTypes from "../filterLink/filterLinkStateTypes";
import TodoList from "./TodoList";

class todoComponent extends Component {
    render() {
        const {
            todos,
            visibilityFilter,
        } = this.props;
        const visibleTodos = this.getVisibleTodos(todos, visibilityFilter);
        return (
            <div className="todoApp">
                <input type="text" ref={node => {
                    this.input = node
                }}/>
                <button
                    onClick={() => {
                        this.props.addTodo(
                            this.input.value,
                            this.getRandomInt(1, 100)
                        );
                        this.input.value = '';
                    }}
                >
                    Add Todo
                </button>
                Show :
                {' '}
                <FilterLinkContainer
                    filter={filterLinkStateTypes.SHOW_ALL}
                    currentFilter={visibilityFilter}
                >
                    All
                </FilterLinkContainer>
                {' '}
                <FilterLinkContainer
                    filter={filterLinkStateTypes.SHOW_ACTIVE}
                    currentFilter={visibilityFilter}
                >
                    Active
                </FilterLinkContainer>
                {' '}
                <FilterLinkContainer
                    filter={filterLinkStateTypes.SHOW_COMPLETE}
                    currentFilter={visibilityFilter}
                >
                    Complete
                </FilterLinkContainer>
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
