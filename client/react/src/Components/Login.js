import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../styles/login.css';

class Login extends Component{
	render(){
		return (<div className=" loginform col-md-offset-1  col-sm-5">
        <form action="#">
          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
            <button className="botonlogin" type="submit">Login</button>
            <input type="checkbox" defaultChecked="checked" /> Remember me
          </div>
          <div className="container">
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot password?</span>
          </div>
        </form>
      </div>)
	}
}


export default Login
