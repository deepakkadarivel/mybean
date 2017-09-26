import todoActionTypes from "./todoActionTypes";

const addTodo = (text, id) => ({
    type: todoActionTypes.ADD_TODO,
    text,
    id
});

const toggleTodo = (id) => ({
    type: todoActionTypes.TOGGLE_TODO,
    id,
});

export {
    addTodo,
    toggleTodo
};