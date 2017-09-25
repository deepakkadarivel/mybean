import React, {Component} from 'react';
import PropTypes from 'prop-types';

class todoComponent extends Component {
    render() {
        return (
            <div className="todoApp">
                <input type="text" ref={node => {
                    this.input = node
                }}/>
                <button
                    onClick={(e) => {
                        this.props.addTodo(
                            this.input.value,
                            this.getRandomInt(1, 100)
                        );
                        this.input.value = '';
                    }}
                >
                    Add Todo
                </button>
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    )}
                </ul>
            </div>
        );
    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

todoComponent.propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
};

export default todoComponent;
