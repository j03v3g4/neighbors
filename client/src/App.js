import React, { Component } from 'react';
import logo from './logo.svg';
import background from './images/neighbors-2.jpg'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Neighbors</h1>
          <img src={background} className="App-background" alt="neigborhood" style={{height: 700, opacity: 0.5}}/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
