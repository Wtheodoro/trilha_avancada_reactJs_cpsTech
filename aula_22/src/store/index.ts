import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import Todos from '../components/Todos'

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

const initialStateUsers ={
    name: 'Friedrich Nietzsche',
    username: 'Zaratustra',
    email: 'nietzsche.fred@soseiquenada.sei'
}

function reducerUsers(state = initialStateUsers, action: any) {
    switch (action.type) {
        case 'PULL_USERS':
            return {
                name: action.payload.name,
                username: action.payload.username,
                email: action.payload.email
            }    
        default:
            return state
    }
}

const createRootReducer = () => combineReducers({
    todos: reducerTodos,
    users: reducerUsers
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }