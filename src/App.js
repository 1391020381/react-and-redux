import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { view as Todos } from './components/Todo'
import { view as Filter } from './components/Filter'
import CountDown from './components/CountDown'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos></Todos>
        <Filter></Filter>
        <CountDown startCount={10}>
          {
            (count) => <div>{count}</div>
          }
        </CountDown>
      </div>
    );
  }
}

export default App;
