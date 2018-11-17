import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter'
import { view as Todos } from './components/Todo'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" /> */}
        <Todos></Todos>
      </div>
    );
  }
}

export default App;
