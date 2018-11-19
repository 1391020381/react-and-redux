import { createStore, combineReducers } from 'redux';

import { reducer as todoReducer } from './components/Todo';
const reducer = combineReducers({
    todos: todoReducer
});

export default createStore(reducer, {});
