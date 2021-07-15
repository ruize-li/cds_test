import React from "react";

export const DatabaseSearchbar = (props) => {
    // const [input, setInput] = useState('');

    // on submit, parse the input string by space
    const input = props.input;
    const setInput = props.setInput;
    const setRefresh = props.setRefresh;


    function handleSearchSubmit() {
        // setInput(e.target.value)
        setRefresh(true);
        
        
    }
    // update input state on changes
    function handleInputChange(e) {
        setInput(e.target.value);
        // setQuery(e.target.value);
    }
    

    return (
        <form onSubmit = {handleSearchSubmit}>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Keywords </span>
            </div>
            <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                onChange = {handleInputChange} />
            <button type="submit" className="btn btn-primary" >暴力点我</button>
        </div>
    </form>
    );
}


