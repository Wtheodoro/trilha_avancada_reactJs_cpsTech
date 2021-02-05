import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store'
import Todos from './components/Todos';
import './styles/globalStyle.css'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
