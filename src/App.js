import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { view as Todos } from './components/Todo'
import { view as Filter } from './components/Filter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos></Todos>
        <Filter></Filter>
      </div>
    );
  }
}

export default App;
