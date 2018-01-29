import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import { createStore } from 'redux'
import './App.css';

import About from './components/About.js';
import Feed from './components/Feed.js';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <header className="App-header">
            <h1 className="App-title">Welcome to SpaceBook</h1>
          </header>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/feed">Feed</Link>
          </nav>
          <Route path="/about" component={About}/>
          <Route path="/feed" component={Feed}/>
       </div>
      </Router>
    );
  }
}

export default App;
