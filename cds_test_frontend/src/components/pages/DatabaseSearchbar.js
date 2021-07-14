import React from "react";

export const DatabaseSearchbar = (props) => {
    // const [input, setInput] = useState('');

    // on submit, parse the input string by space
    const input = props.input;
    const setInput = props.setInput;
    const setRefresh = props.setRefresh;


    function handleSearchSubmit() {
        setRefresh(true);
        
        
    }
    // update input state on changes
    function handleInputChange(e) {
        setInput(e.target.value);
        // setQuery(e.target.value);
    }
    

    return (
        <form onSubmit = {handleSearchSubmit}>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Keywords </span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                onChange = {handleInputChange} />
            <button type="submit" class="btn btn-primary" >暴力点我</button>
        </div>
    </form>
    );
}


