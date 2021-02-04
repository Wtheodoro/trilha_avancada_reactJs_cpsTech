import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react';
import Decrease from './Components/Decrease';
import Increase from './Components/Increase';
import Viewer from './Components/Viewer';
import { ShoppingCart } from './types/ShoppingCart';

const globalState : ShoppingCart = {
  amount: 420
}

function reducer(state = globalState, action: any) {
  switch(action.type) {
    case 'INCREASE_AMOUNT':
      return {
        amount: state.amount + 1
      }
    case 'DECREASE_AMOUNT':
      return {
        amount: state.amount - 1
      }
    default:
      return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Increase />
        <Viewer />
        <Decrease />
      </Provider>
    </div>
  );
}

export default App;
