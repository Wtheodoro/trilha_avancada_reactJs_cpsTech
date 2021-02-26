import { combineReducers } from 'redux'
import reducerHero from './hero/reducer'

const createRootReducer = () => combineReducers({
    reducerHero
})

export default createRootReducer