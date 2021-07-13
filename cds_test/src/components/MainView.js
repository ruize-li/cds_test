/**
 * Main view, updates constantly to display different sections of pages
 * CSS by Boostrap 5.0
 * Author: Ruize Li
 */
 import React from "react";
 import Homepage from "./pages/Homepage";

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view : 'home'
        };
    }


    render() {
        // figure out what to display
        const page = this.state.view;
        let content = page === 'page' ? <Homepage/> : "";
        console.log(content);
        return(
            <div className="container">
                <Homepage />
            </div>
        );
    }
}



export default MainView;