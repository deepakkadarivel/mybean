import todoInitialState from "./todoInitialState";
import todoActionTypes from "./todoActionTypes";

const todo = (state, action) => {
    switch (action.type) {
        case todoActionTypes.ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                complete: false,
            };
        case todoActionTypes.TOGGLE_TODO:
            return state.id !== action.id ? state : {...state, complete: !state.complete};
        default:
            return state;
    }
};

const todos = (state = todoInitialState, action) => {
    switch (action.type) {
        case todoActionTypes.ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case todoActionTypes.TOGGLE_TODO:
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

export default todos;