/**
 * A single database query
 * CSS by Boostrap 5.0
 * Display query results
 * Author: Ruize Li
 */
 import React, { useState, useEffect } from "react";

 
 
export const DatabaseDisplayResults = (props) => {
    // input: jsonInput
    let query = props.query;            // query info
    let refresh = props.refresh;        // if false, do not update, do so other wise
    let setRefresh = props.setRefresh;  // set
    let searchRes = props.searchRes;
    let setSearchRes = props.setSearchRes;
    let data = props.jsonInput;         // json raw data
    let fNames = Object.keys(data);

    if (refresh) {
        // search keywords

        // alert('refresh is true!');
        
        
        for (let key of query.split(' ')) {
            // f_names is the list of file names in the object
            for (let file of fNames) {
                console.log('refresh is' + refresh)
                console.log("key is " + key);
                console.log(data[file]["keywords"].indexOf(key));
                // if the keyword exists and there is no duplicates
                if (data[file]["keywords"].indexOf(key) > -1 && !searchRes.includes(data[file])) {
                    // let temp = searchRes;
                    // temp.push(data[file]);
                    // setSearchRes(temp);
                }
            }
        }
        // console.log(searchResults);
        setRefresh(false);
    }
    
    // prepare the results
    const res = searchRes.map((item) => {
        <div className="container">
            <p>item["f_name"]</p>
            <p>item["keywords"]</p>
            <p>item["file_path"]</p>
        </div>
    })

    return (
        <div className="container">
            <h2>Display the results!</h2>
            <ul>
                {res};
            </ul>
        </div>
        
        
    ) 
}