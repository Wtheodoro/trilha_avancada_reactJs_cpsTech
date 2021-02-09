import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.css'
import Cornerstone from './components/Cornerstone';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app-container">
        <Cornerstone />
        <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
