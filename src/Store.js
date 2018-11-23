import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { reducer as todoReducer } from './components/Todo';
import { reducer as filterReducer } from './components/Filter'
import { routerReducer } from 'react-router-redux'
import { reducer as weatherReducer } from './components/Weather/';
import thunkMiddleware from 'redux-thunk'
const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    weather: weatherReducer,
    routing: routerReducer
});

const middlewares = [thunkMiddleware]

const storeEnhancers = compose(
    applyMiddleware(...middlewares)
)

export default createStore(reducer, {}, storeEnhancers);
