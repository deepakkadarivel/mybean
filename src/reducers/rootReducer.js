import {combineReducers} from 'redux';
import todos from "../components/todo/todoReducer";
import visibilityFilter from '../components/filterLink/filterLinkReducer';
import appUser from "../components/Login/LoginReducer";

const myBeanApp = combineReducers({
    todos,
    visibilityFilter,
    appUser,
});

export default myBeanApp;