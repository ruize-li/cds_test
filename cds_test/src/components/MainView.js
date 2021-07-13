/**
 * Main view, updates constantly to display different sections of pages
 * CSS by Boostrap 5.0
 * Author: Ruize Li
 */
 import React from "react";
 import Homepage from "./pages/Homepage";
 import Resources from "./pages/Resources";

class MainView extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        // figure out what to display
        const page = this.props.state.viewPage;
        console.log(page);
        // let content = page === 'page' ? <Homepage/> : "";
        // console.log(content);
        return(
            <div className="container">
                <Homepage />
            </div>
        );
    }
}



export default MainView;