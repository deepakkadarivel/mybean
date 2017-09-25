import {combineReducers} from 'redux';
import todos from "../components/todo/todoReducer";
import visibilityFilter from '../components/filterLink/filterLinkReducer';

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;