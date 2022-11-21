import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Login from './view/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Login />
      </header>
    </div>
  );
}

export default App;
