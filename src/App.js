import React, { Component } from 'react';
import List from "./List.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Things That Nag You</header>
          <div>
              <List />
          </div>
      </div>
    );
  }
}

export default App;
