/**
 * Database page
 * CSS by Boostrap 5.0
 * provides search and fitler functionalities
 * Author: Ruize Li
 */
import React, { useState, useEffect } from "react";



function DatabaseSearchbar(props) {

    // on submit, parse the input string by space
    const input = props.input;
    const setInput = props.setInput;
    const output = props.output;
    const setOutput = props.setOutput;
    // const setRefresh = props.setRefresh;
    const doQuery = props.doQuery;
    const setDoQuery = props.setDoQuery;

    function handleSearchSubmit() {
        // setInput(e.target.value)
        
        
    }
    // on Enter
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setInput(e.target.value);
            setDoQuery(true);
            
            // alert('doquery is true!')
        }
    }

    // update input state on changes
    function handleInputChange(e) {
        setInput(e.target.value);
    }
    return (
        <div className="container">
            <form >
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Keywords </span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                         onKeyPress = {handleKeyPress}/>
                    <button type="submit" className="btn btn-primary" >暴力点我</button>
                </div>
            </form>
            {doQuery && <DatabaseQuery
                            query = {input}
                            setOutput = {setOutput}
                         />}
        </div>
        
    );
}



/**
 * Send the keywords to backend api
 * Fetch filtered results
 * @param {props}} props 
 * @returns 
 */
function DatabaseQuery(props) {
    let query = props.query;
    let setOutput = props.setOutput;

    let apiQuery = {keywords : query}
    alert("query is" + query)
    
    // if user confirmed input
    // fetch
    
    fetch('/api/', {
        method : 'PUT',
        body : JSON.stringify(apiQuery)

    }
    ).then( res => {
        if (res.ok) {
            
            return res.json();
        }
    }).then(jsonResponse => setOutput(jsonResponse))
    



    // console.log(query);
    return (
        <div>This is the place for showing query results!
        {/* <p>{JSON.stringify({output})}</p> */}
        <h3>{query}</h3>
        
        </div>
        
    ) 
}



function Database() {
    // input values from search bar
    // output : json fetched from API call
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [doQuery, setDoQuery] = useState(false);

    // console.log(searchRes)
    return (
        <div className="align-items-center">
            <h2>Welcome to the databse.</h2>
            <p>Instruction: Type in keywords in the search bar, seperated by space, and press <code>Enter</code> to view the results.</p>
            <DatabaseSearchbar 
                input = {input}
                setInput = {setInput}
                doQuery = {doQuery}
                setDoQuery = {setDoQuery}
                setOutput = {setOutput}
            />
            Input is : {input}
            
        </div>
    );
}



export default Database;