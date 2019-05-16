import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeter from './Greeter/Greeter.react'
import axios from 'axios'
import ShowTrainers from './ShowTrainers/ShowTrainers.react'
import AddTrainer from './AddTrainer/AddTrainer.react';
import Axios from 'axios';

const postToServer = (values) => {
  console.log(values);
  const url = "http://localhost:4000/trainers"
  axios.post(url, values).then();
}
function App() {
  return (
    <div className="App">
      <h1>React Redux - Vijay</h1>
      <Greeter></Greeter>
      <ShowTrainers></ShowTrainers>
      <AddTrainer onSubmit={postToServer}></AddTrainer>
    </div>
  );
}

export default App;
