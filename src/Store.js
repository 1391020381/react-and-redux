import { createStore, combineReducers } from 'redux';

import { reducer as todoReducer } from './components/Todo';
import { reducer as filterReducer } from './components/Filter'
const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default createStore(reducer, {});
