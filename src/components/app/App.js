import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from '../Global/Header/Header'
import Login from "../Login/Login";
import Home from "../Home/Home";
import About from "../About/About";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/login' component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default App;
