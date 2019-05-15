import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './Greeter/Greeter.react'
import Greeter1 from './Greeter/Greeter.react'
import ShowTrainers from './ShowTrainers/ShowTrainers.react'

function App() {
  return (
    <div className="App">
      <h1>React Redux - Vijay</h1>
      {/* <Greeter></Greeter>
      <Greeter1></Greeter1> */}
      <ShowTrainers></ShowTrainers>
    </div>
  );
}

export default App;
