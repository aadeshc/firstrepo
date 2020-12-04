import { createStore, applyMiddleware } from 'redux'
import { Reducer } from './Reducer'
import Logger from 'redux-logger'
import thunk from 'redux-thunk'

export const store = createStore(Reducer, applyMiddleware(thunk, Logger))