/**
 * A single database query
 * CSS by Boostrap 5.0
 * provides search and fitler functionalities
 * Author: Ruize Li
 */
 import React, { useState, useEffect } from "react";

 
 
export const DatabaseQuery = (props) => {
    let query = props.input;
    let output = props.output;
    let setOutput = props.setOutput;
    useEffect(() => {
        fetch('/api/').then( res => {
            if (res.ok) {
                
                return res.json();
            }
        }).then(jsonResponse => setOutput(jsonResponse))
    }, [])
    // console.log(query);
    return (
        <div>This is the place for showing query results!
        {/* <p>{JSON.stringify({output})}</p> */}
        <h3>{query}</h3>
        </div>
        
    ) 
}