import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import reducerHero from './hero/reducer'

const createRootReducer = () => combineReducers({
    reducerHero
})

export default createRootReducer