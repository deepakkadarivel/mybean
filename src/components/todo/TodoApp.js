import React from 'react';
import TodoListContainer from "./TodoListContainer";
import AddTodoContainer from "./AddTodoContainer";
import Footer from "./Footer";

const TodoApp = () => (
    <div className="todoApp">
        <AddTodoContainer/>
        <Footer/>
        <TodoListContainer/>
    </div>
);

export default TodoApp;
