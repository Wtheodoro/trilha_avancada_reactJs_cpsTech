import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

const initialStateTodos = {
    todos: []
}

function reducerTodos(state = initialStateTodos, action: any) {
    switch(action.type) {
        case 'PULL_TODOS':
            return {
                todos: action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducerTodos)

export { store }