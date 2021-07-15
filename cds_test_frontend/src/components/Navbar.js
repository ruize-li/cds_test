/**
 * Navbar
 * CSS by Boostrap 5.0
 * Author: Ruize Li
 */
import React from "react";

class Navbar extends React.Component {
    // init
    constructor(props) {
        super(props);

        // binding event handlers
        this.handleClickHome = this.handleClickHome.bind(this);
        this.handleClickDatabase = this.handleClickDatabase.bind(this);
        this.handleClickAbout = this.handleClickAbout.bind(this);
        this.handleClickResources = this.handleClickResources.bind(this);
        this.handleClickTeachingResearch = this.handleClickTeachingResearch.bind(this);
    }

    // handling clicking events
    handleClickHome() {
        // this.props.state.homeClicked = true;
        this.props.handleClickHome();
    };
    handleClickDatabase() {
        this.props.handleClickDatabase();
    };
    handleClickResources() {
        this.props.handleClickResources();
    };
    handleClickTeachingResearch() {
        this.props.handleClickTeachingResearch();
    };
    handleClickAbout() {
        this.props.handleClickAbout();
    }


    // output jsx
    render() {
        return (
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                    <span className="fs-4">Colby Digital Studies</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><a  className="nav-link active" aria-current="page" onClick = {this.handleClickHome}>Home</a></li>
                    <li className="nav-item"><a  className="nav-link" onClick = {this.handleClickTeachingResearch}>Teaching &amp; Research</a></li>
                    <li className="nav-item"><a  className="nav-link" onClick = {this.handleClickDatabase}>Database</a></li>
                    <li className="nav-item"><a  className="nav-link" onClick = {this.handleClickResources}>Resources</a></li>
                    <li className="nav-item"><a  className="nav-link" onClick = {this.handleClickAbout}>About</a></li>
                    <li className="nav-item"><div id="google_translate_element" /></li>
                </ul>
                </header>
            </div>
            );
    }; 
}



export default Navbar;
