/**
 * Admin page for managing database
 */
import { useState } from "react";

const password = 'lrcadmin';

const SearchBar = () => {
    return (
        <div className="input-group">
            <div className="form-outline">
                <input type="search" id="form1" className="form-control" />
                <label className="form-label" >Search</label>
            </div>
            <button type="button" className="btn btn-primary">
                Select
            </button>
        </div>
    )
}

const Nav = () => {

    // on click, save the settings for current panel
    let handleSaveBtnClick = (e) => {
        e.preventDefault();

    }

    return (
        <nav className="navbar navbar-light">
            <form >

                <button className="btn btn-outline-success" type="button" onClick = { handleSaveBtnClick }>Edit Database</button>
                {/* <button className="btn btn-outline-secondary" type="button" onClick = { handleAddNewBtnClick }>Add New Entry</button> */}
                
            </form>
        </nav>

        
    );
}


const Backend = () => {
    return (
        <div className = "d-flex justify-content-center">
            <div className="w-100">
            <h4>
                Successfully logged In! Welcome to Backend Portal.
            </h4>

            <Nav/>

            <SearchBar/>

            </div>
        </div>
        
    )
}


const LoginPage = (props) => {
    const [tokens, setTokens] = useState('');
    const setIsLoggedIn = props.setIsLoggedIn;

    // on input change, set token
    let onChange = (e) => {
        setTokens(e.target.value);
    }

    // on button click
    // check credentials, if yes
    let handleClick = (e) => {
        e.preventDefault();
        // let loginStatus = false;
        // fetch password from backend
        fetch('http://localhost:5000/adminlogin?userInput=' + tokens)
        .then( res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then (data => {
            if (data) {
                if (data.verification) {
                    setIsLoggedIn(true);
                }
                else {
                    alert('invalid credentials :(');
                    setTokens('');
                }
            }
        })
        .catch(err => console.log(err));


        // if (tokens === password) {
        //     setIsLoggedIn(true);
        // } else {
        //     alert('Invalid password');
        // }

    }
    return(
        <div className="d-flex justify-content-center">
            <div className="w-25">
            <form className="form-signin">
                {/* <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/> */}
                    <h1 className="h3 mb-3 font-weight-normal">Admin Login</h1>
                    {/* <label className="sr-only">Email address</label> */}
                    {/* <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" /> */}
                    <label className="sr-only">Token</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Credentials.." required="" onChange = {onChange} />
                    <p>Please do not share tokens</p>
                    {/* <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div> */}
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick = {handleClick}>Sign in</button>
                    {/* <p className="mt-5 mb-3 text-muted">© 2017-2018</p> */}
    </form>
    </div>
        </div>
        
    )
}


 const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // console.log(isLoggedIn);

    return (
        <div className="container">
        {!isLoggedIn && <LoginPage setIsLoggedIn = {setIsLoggedIn}/>}
        {isLoggedIn && <Backend/>}
        </div>
    );
}

export default Admin;