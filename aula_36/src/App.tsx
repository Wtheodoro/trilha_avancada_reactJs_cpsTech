import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useHook from './hooks/hook';

function App() {

  const [reRender, setReRender] = useState<Boolean>(false)
  const { year, month, day, hours, minutes, seconds } = useHook()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          rel="noopener noreferrer"
        >
          Hoje é o dia {day} do mês {month} de {year}. O relógio marca {hours} : {minutes} : {seconds}
        </a>

        <button onClick={() => setReRender(!reRender)}>Reload</button>

      </header>
    </div>
  );
}

export default App;
