import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './auth';

const auth = new Auth();

let state = {};
    window.setState = (change) =>{
        state = Object.assign({}, state, change );
    
        ReactDOM.render(<App {...state} />, document.getElementById('root'));
    };
    /* eslint no-restricted-globals: 0*/
    let initialState = {
        name: "Trushant",
        location : location.pathname.replace(/^\/?|\/$/g, ""),
        auth
    };

    window.setState(initialState);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
