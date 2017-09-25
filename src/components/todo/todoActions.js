import todoActionTypes from "./toActionTypes";

const addTodo = (text, id) => {
    return {
        type: todoActionTypes.ADD_TODO,
        text,
        id
    }
};

const toggleTodo = (id) => {
    return {
        type: todoActionTypes.TOGGLE_TODO,
        id,
    }
};

export {
    addTodo,
    toggleTodo
};