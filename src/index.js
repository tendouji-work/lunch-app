import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { Router } from 'react-router';
import * as serviceWorker from './serviceWorker';
import { appStateReducer } from './reducers/appState';
// import createHistory from 'history/createBrowserHistory';
import App from './App';
import './assets/style/main.css';

const store = createStore(appStateReducer);

/*
const history = createHistory();
const Root = (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);
*/
const Root = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
