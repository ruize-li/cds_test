
import React from 'react';
import { render } from 'react-dom';
import './App.css';
import Navbar from './components/Navbar'
import MainView from './components/MainView';

class App extends React.Component{
	// init 
	constructor() {
		super();
		this.state =  {
			
		};

	}

	// event handler
	// if a button in navbar is cliked: generate pages
	handleClick = (btnName) => {
		if (btnName === 'home') {
			// return to the home page
		} else if (btnName === 'resources') {
			// build resource page
		} else if (btnName = 'about') {
			// build about page
		} else if (btnName = 'database') {
			// build database

		}
	};


	
	render() {
		let nav_state = this.state.navbarState;


		return (
			<div className="App">
				<Navbar state = {nav_state} handleClick = {this.handleClick}/>
				<MainView />
			</div>
		);
	}
	
}

export default App;
