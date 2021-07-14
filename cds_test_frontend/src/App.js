
import React from 'react';
import { render } from 'react-dom';
import './App.css';
import Navbar from './components/Navbar'
import MainView from './components/MainView';

class App extends React.Component{
	// init 
	constructor(props) {
		super(props);
		this.state =  {
			mainViewState : {
				viewPage : '#',
			},
		}
		// binding
		this.handleClickHome = this.handleClickHome.bind(this);
        this.handleClickDatabase = this.handleClickDatabase.bind(this);
        this.handleClickAbout = this.handleClickAbout.bind(this);
        this.handleClickResources = this.handleClickResources.bind(this);
        this.handleClickTeachingResearch = this.handleClickTeachingResearch.bind(this);
	}

	// event handler
	// if a button in navbar is cliked: generate pages
	handleClickHome() {
		this.setState({mainViewState : {viewPage : 'home'}});
	};
	handleClickDatabase() {
		this.setState({mainViewState : {viewPage : 'database'}});
	}
	handleClickResources() {
		this.setState({mainViewState : {viewPage : 'resources'}});
	}
	handleClickAbout() {
		this.setState({mainViewState : {viewPage : 'about'}});
	}
	handleClickTeachingResearch() {
		this.setState({mainViewState : {viewPage : 'teachingresearch'}});
	}



	
	render() {
		let nav_state = this.state.navbarState;
		let main_view_state = this.state.mainViewState;


		return (
			<div className="App">
				<Navbar 
					handleClickHome = {this.handleClickHome}
					handleClickDatabase = {this.handleClickDatabase}
					handleClickAbout = {this.handleClickAbout}
					handleClickResources = {this.handleClickResources}
					handleClickTeachingResearch = {this.handleClickTeachingResearch}
				/>
				<MainView state = {main_view_state}/>
			</div>
		);
	}
	
}

export default App;
