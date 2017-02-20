import React, { Component } from 'react';
import logo from './images/logo.svg';

import ShirtItem from './../Shirt/ShirtItem';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React My friend</h2>
        </div>

        <ShirtItem
          shirt={2}
          slug="sp"
        />

        <ShirtItem
          team="Santos"
          shirt={1}
          slug="st"
        />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <span>Just some scss test</span>
        </p>
      </div>
    );
  }
}

export default App;
