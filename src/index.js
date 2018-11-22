import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
// import store from './Store.js';
import * as serviceWorker from './serviceWorker';
// import Routes from './Routers.js'
import BasicExample from './Routers'
ReactDOM.render(
    <BasicExample></BasicExample>,
    document.getElementById('root')
);

// <Provider store={store}>
//     <App />
// </Provider>, document.getElementById('root')
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
