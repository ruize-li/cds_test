
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
			mainViewState : {
				viewPage : '#',
			},
		};

	}

	// event handler
	// if a button in navbar is cliked: generate pages
	handleClick = (btnName) => {
		if (btnName === 'home') {
			// go to the home page
			this.setState({mainViewState : {viewPage : 'home'}})
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
		let main_view_state = this.state.mainViewState;


		return (
			<div className="App">
				<Navbar  handleClick = {this.handleClick}/>
				<MainView state = {main_view_state}/>
			</div>
		);
	}
	
}

export default App;
