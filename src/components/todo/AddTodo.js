import React from 'react';

const AddTodo = ({addTodo}) => {
    let input;
    return (
        <div>
            <input type="text" ref={node => {
                input = node
            }}/>
            <button
                onClick={() => {
                    addTodo(input.value, getRandomInt(1, 100));
                    input.value = '';
                }}
            >
                Add Todo
            </button>
        </div>
    );
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

export default AddTodo;
