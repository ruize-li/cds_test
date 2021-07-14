/**
 * Database page
 * CSS by Boostrap 5.0
 * provides search and fitler functionalities
 * Author: Ruize Li
 */
import React, { useState, useEffect } from "react";
import { DatabaseQuery } from "./DatabaseQuery";
import { DatabaseSearchbar } from "./DatabaseSearchbar"
import { DatabaseDisplayResults } from "./DatabaseDisplayResults";





function Database() {
    // input values from search bar
    // output : json fetched from API call
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [searchRes, setSearchRes] = useState([]);
    // console.log(output);

    // console.log(searchRes)
    return (
        <div className="align-items-center">
            <h2>Welcome to the databse.</h2>
            <p>Instruction: Type in keywords in the search bar, seperated by space, and press <code>Enter</code> to view the results.</p>
            <DatabaseSearchbar 
                input = {input}
                setInput = {setInput}
                setRefresh = {setRefresh}
            />
            <DatabaseQuery
                query = {input}
                setOutput = {setOutput}
                output = {output}
             />
             
             <DatabaseDisplayResults 
                jsonInput = {output}
                query = {input}
                refresh = {refresh}
                setRefresh = {setRefresh}
                searchRes = {searchRes}
                setSearchRes = {setSearchRes}
             />
        </div>
    );
}



export default Database;