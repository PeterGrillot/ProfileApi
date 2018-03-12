// React
import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

// Redux
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducer from "./store/reducers";

// Components
import About from './components/About.js';
import Feed from './components/Feed.js';
import Login from './components/Login.js';

// Create Store
const store = createStore(reducer, { 
	count: 0, 
	token: undefined
});

// App Component
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<header className="App-header">
							<h1>Welcome to SpaceBook</h1>
						</header>
						<hr/>
						<nav>
							<Link to="/about">About</Link>
							<Link to="/feed">Feed</Link>
							<Link to="/login">Login</Link>
						</nav>
						<Route path="/about" component={About}/>
						<Route path="/feed" component={Feed}/>
						<Route path="/login" component={Login}/>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
