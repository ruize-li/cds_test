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
    let items = props.data;
    const [displayRes, setDisplayRes] = useState([]);
    // let displayRes = [];
    
    

    // when data changes, re-render the lists
    useEffect(() => {
        // get the ids, keywords, fNames
        let ids = Object.keys(items).map((val) => items[val]['id']);
        let keywords = Object.keys(items).map((val) => items[val]['keyword']);
        let fNames = Object.keys(items).map((val) => items[val]['file_name']);
        let temp = [];
        for (let i = 0; i < keywords.length; i++) {
            temp.push(
            <div key = {ids[i]}>
                <h5>{fNames[i]}</h5>
                <p>{keywords[i].slice(0, 150) + "..."}</p>
            </div>);
        }
        console.log('use effect ran')
        setDisplayRes(temp);
        // console.log(displayRes);
     }, [items])

    return (
        <div className="container">
        <h2 key = {items}>Results</h2>
            
            { displayRes.length && displayRes }
            
        </div>
    );
}



const Search = () => {

    const [query, setQuery] = useState('');
    const [result, setResult] = useState('');

    // on click: query the data
    //  store them in state
    let getData = (e) => {
        // prevent button from refreshing the page
        e.preventDefault();
        console.log(query.replaceAll(' ', '-'))
        fetch('http://localhost:5000/search?keywords=' + query.replaceAll(' ', '-')) 
            .then(response => {
                if (response.ok) {
                    console.log('response ok');
                    // console.log(response.json())
                    return response.json();
                  } else {
                    //   console.log(response.status);
                    throw new Error('fetch failed');
                  }
            })
            .then(data => {
                if (data === 'error') throw new Error('invalid keywords');
                // console.log(data);
                setResult(data);
            })
            .catch(err => console.log(err))
        // console.log('filtered res' + this.state.filteredResult);
    };

    // handle input change
    let handleInputChange = (e) => { setQuery(e.target.value)}

    return (
        <form>
            <h3>Input keywords, separated by ' ', and press <code>Enter</code></h3>
            <input class="form-control" type = 'text' placeholder="Search for..." onChange={ handleInputChange }/>
            <button className="btn btn-primary" onClick = { getData }> Search </button>
            {/* <p>{ query }</p> */}
            <hr />
            { result && <DisplaySearchRes data = { result }  />}
        </form> 
    );
}


function Database() {
    return (
        <div className="container">
            <Search />
        </div>
    );
}


export default Database;