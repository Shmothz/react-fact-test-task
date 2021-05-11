import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer} from './reducer';

let reducers = combineReducers ({
  app: reducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store