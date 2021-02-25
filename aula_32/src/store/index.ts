import { createStore, Store, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createRootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

export const store: Store<any> = createStore(createRootReducer(), applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)