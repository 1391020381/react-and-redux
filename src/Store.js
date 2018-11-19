import { createStore, combineReducers, compose } from 'redux';

import { reducer as todoReducer } from './components/Todo/reducer';
const reducer = combineReducers({
    todos: todoReducer
});

export default createStore(reducer, {});
