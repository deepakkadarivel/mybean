import {combineReducers} from 'redux';
import {todos, visibilityFilter} from "../components/todo/todoReducer";

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;