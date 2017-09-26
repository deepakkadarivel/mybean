import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import myBeanApp from './reducers/rootReducer';
import {ApolloProvider, createNetworkInterface, ApolloClient} from 'react-apollo'
import {BrowserRouter} from 'react-router-dom'
import './scss/app.css'
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:8181/graphql'
});

networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {};
        }
        req.options.headers['access_token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIyMTc2YTUwLTlhMTEtMTFlNy1hNGFlLWVkNDc2ZTQzYWY2YiIsImlhdCI6MTUwNTU3NTE5MywiZXhwIjoxNTA1NTc2OTkzfQ.m2mdCEjlBTH-zqHCQZIAx4S2TWY6I0jh_re0iosDwlU';
        next();
    },
}]);

const client = new ApolloClient({
    networkInterface
});

const store = createStore(
    combineReducers({
        myBeanApp: myBeanApp,
        apollo: client.reducer(),
    }),
    {}, // initial state
    compose(
        applyMiddleware(client.middleware()),
        // If you are using the devToolsExtension, you can add it here also
        (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
);

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider store={store} client={client}>
            <App/>
        </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
