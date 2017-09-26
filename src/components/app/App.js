import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import HeaderContainer from '../Global/Header/HeaderContainer'
import LoginContainer from "../Login/LoginContainer";
import Home from "../Home/Home";
import About from "../About/About";
import './App.css';
import TodoApp from "../todo/TodoApp";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderContainer/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/todo' component={TodoApp}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/login' component={LoginContainer}/>
                </Switch>
            </div>
        );
    }
}

export default App;
