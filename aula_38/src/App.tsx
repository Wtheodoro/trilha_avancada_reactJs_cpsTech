import React from 'react';
import './App.css';
import Avatar from './components/Avatar';
import Lista from './components/Lista';
import Button from './components/Button';
import Mensagem from './components/Mensagem';

function App() {
  return (
    <div className="App">
      <Avatar url={"https://github.com/wtheodoro.png"}/>
      <Lista />
      <Button type={'concordo'}/>
      <Button type={'não concordo'}/>
      <Mensagem />
    </div>
  );
}

export default App;
