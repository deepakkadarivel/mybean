import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider, createNetworkInterface, ApolloClient} from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import './scss/app.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:8080/graphql'
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

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
