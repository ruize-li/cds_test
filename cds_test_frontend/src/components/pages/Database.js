/**
 * Database page
 * CSS by Boostrap 5.0
 * provides search and fitler functionalities
 * Author: Ruize Li
 */
import React, { useState, useEffect, Component } from "react";
import SelectSearch from 'react-select-search';
import './style.css'
import axios from 'axios';

// data_set =
function DisplaySearchRes(props) {
    const [items, setItems] = useState(props.data);
    useEffect(() => {setItems(
        
    ), [props.data]})
    // const data = props.data;
    // console.log(data);
    // console.log(Object.keys(data).map((val, i) => data[val]['file_name']));
    // const listItems = Object.keys(data).map((val, i) => {
    //     <li key = {data[val]['file_name']}>
    //         {data[val]['file_name']}
    //     </li>
    // })
    

    return (
        <div className="container">
        <h2>Here are the searched results:</h2>
            <ul>
                {items}
            </ul>
        </div>
    );
}


class Search extends Component {
    constructor() {
        super();
        this.state = {
            value : 'Enter Keywords...',
            query : '',
            result : {},
            filteredResult : {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getData = this.getData.bind(this);
    }

    // on click: query the data
    getData(e){
        e.preventDefault();
        let query = this.state.query;
        console.log('get data invoked')
        console.log('in getdata, query is ' + query)
        fetch('http://localhost:5000/search?keywords=毛主席')  
            .then(response => {
                if (response.ok) {
                    return response.json();
                  } else {
                      console.log(response.status);
                    throw new Error('Something went wrong');
                  }
            })
            .then(data => this.setState({result : data}))
            .catch(err => console.log(err))
        // console.log('filtered res' + this.state.filteredResult);
    };
    // handle input change
    handleInputChange(e) { this.setState({ query : e.target.value})}

    


    render() {
        return (
            <form>
                <h3>Input keywords, separated by '-', and press <code>Enter</code></h3>
                <input type = 'text' placeholder="Search for..." onChange={this.handleInputChange}/>
                <button className="btn btn-primary" onClick = {this.getData}> Search </button>
                <p>This is the database query page</p>
                <p>{this.state.query}</p>
                <DisplaySearchRes data = {this.state.result}   />
            </form>
        );
    }
}


function Database() {
    return (
        <div className="container">
            <Search />
        </div>
    );
}


export default Database;