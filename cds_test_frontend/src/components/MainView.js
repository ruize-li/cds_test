/**
 * Main view, updates constantly to display different sections of pages
 * CSS by Boostrap 5.0
 * Author: Ruize Li
 */
 import React from "react";
 import Homepage from "./pages/Homepage";
 import Resources from "./pages/Resources";
 import Database from "./pages/Database";

class MainView extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        // determine the current page
        const page = this.props.state.viewPage;
        
        return(
            <div className="container">
                {page === 'home' ? <Homepage/> : null}
                {page === 'about' ? <Homepage/> : null}
                {page === 'resources' ? <Resources/> : null}
                {page === 'teachingresearch' ? <Homepage/> : null}
                {page === 'database' ? <Database/> : null}
            </div>
        );
    }
}



export default MainView;