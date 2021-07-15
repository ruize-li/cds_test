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



class Search extends Component {
    constructor() {
        super();
        this.state = {
            query : '',
            result : [],
            filteredResult : []
        }
    }

    getData = () => {
        let query = this.state.query;
        console.log('get data invoked')
        console.log('in getdata, query is ' + query)
        fetch('http://localhost:9000/search?keywords=' + query)  
            .then(response => {
                if (response.ok) {
                    return response.json();
                  } else {
                      console.log(response.status);
                    throw new Error('Something went wrong');
                  }
            })
            .then(data => this.setState({result : JSON.stringify(data)}))
            .catch(err => console.log(err))
    };
    // handle input change
    handleInputChange = () => (
        
        this.setState({
            query: this.search.value
        }), () => {
            if (this.state.query) {
                console.log('get data executed!')
                this.getData();
            }
        }
    );
    // handleInputChange = () => {
    //     this.setState({});
    // }
    
    // on load
    componentDidMount(){
        console.log('mounted!')
        this.getData();
    };

    render() {
        return (
            <form>
                <h3>Input keywords, separated by space, and press <code>Enter</code></h3>
                <input placeholder="Search for..." ref={input => this.search = input} onChange={this.handleInputChange}/>
                <p>This is the database query page</p>
                <p>{this.state.query}</p>
                <p>Results: {this.state.result}</p>
            </form>
        );
    }
}


function Database() {
    const options = [
        {name: 'SHMH', value: 'sv', imgpath: 'path1'},
        {name: 'SDMH', value: 'en', imgpath: 'path2'},
        {
            type: 'group',
            name: 'Group name',
            items: [
                {name: 'RMRB', value: 'es'},
            ]
        },
    ];
    return (
        <div className="container">
            <Search />
            {/* <SelectSearch options = {options} value = "" name = "keywords" placeholder = "Enter keywords.."/> */}
        </div>
    );
}


export default Database;