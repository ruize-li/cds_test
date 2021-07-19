/**
 * Main view, updates constantly to display different sections of pages
 * CSS by Boostrap 5.0
 * Author: Ruize Li
 */
 import React from "react";
 import Homepage from "./pages/Homepage";
 import Resources from "./pages/Resources";
 import Database from "./pages/Database";
 import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class MainView extends React.Component {


    render() {
        // determine the current page
        
        return(
            <Router>
                <div className="container-lg">

                <Switch>
                    <Route exact path = '/'>                    <Homepage/>     </Route>
                    <Route exact path = '/resources'>           <Resources/>    </Route>
                    <Route exact path = '/teachingresearch'>    <Homepage/>     </Route>
                    <Route exact path = '/database'>            <Database/>     </Route>
                </Switch>
                
                </div>
            </Router>
            
        );
    }
}



export default MainView;