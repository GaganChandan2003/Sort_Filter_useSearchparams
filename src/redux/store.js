import { legacy_createStore,applyMiddleware, combineReducers } from 'redux';
import { reducer } from './reducer';
import thunk from 'redux-thunk'
import { authreducer } from '../authdedux/authreducer';
let rootreducer=combineReducers({
    reducer:reducer,
    auth:authreducer
})
const store=legacy_createStore(rootreducer,applyMiddleware(thunk));
export default store;