import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowMessage from './ShowMessage/ShowMessage'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <ShowMessage greeter="Vijay" greeting="Welcome to React"></ShowMessage>
    </div>
  );
}

export default App;
