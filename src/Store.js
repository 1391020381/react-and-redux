import { createStore, combineReducers } from 'redux';

import { reducer as todoReducer } from './components/Todo';
import { reducer as filterReducer } from './components/Filter'
import { routerReducer } from 'react-router-redux'
const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    routing: routerReducer
});

export default createStore(reducer, {});
