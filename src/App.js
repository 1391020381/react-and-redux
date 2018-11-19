import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { view as Todos } from './components/Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos></Todos>
      </div>
    );
  }
}

export default App;
