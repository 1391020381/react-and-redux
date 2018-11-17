import {createStore,combineReducers} from 'redux';
import {reducer as todoReducer} from './components/Todo'

// import Perf from 'react-addons-perf'
// const win = window;
// win.Perf = Perf


const reducer = combineReducers({
 todos:todoReducer
})

// const middlewares = []
// if(process.env.NODE_ENV !=='production'){
//     middlewares.push(require('redux-immutable-state-invariant')());
// }

// const storeEnhancers = compose(
//     applyMiddleware(...middlewares),
//     (win && win.devToolsExtension) ? win.devToolsExtension():(f)=>f,
// )
export default createStore(reducer,{})