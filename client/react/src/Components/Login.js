import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../styles/login.css';
import ProjectsApi from '../ProjectsApi'

class Login extends Component{
constructor(){
  super()
    this.state={
      username: '',
      password:''
    }

}

handleChangeUsername=(e) =>{
this.setState({username: e.target.value});
console.log(e.target.value)
}
handleChangePassword= (e)=>{
this.setState({password: e.target.value});
console.log(e.target.value)
}

handleSubmit(event) {
    event.preventDefault();
//cridar  la funció de projectApi que em faci el login( encara s'ha de fer la funció)
//ProjectsApi.login()
    //  .then((data) =>{
        //TOdo
        //})
  }


	render(){
		return (<div className=" loginform col-md-offset-1  col-sm-5">
        <form action="#">
          <div className="container">
            <label><b>Username</b></label>
              <input  type="text" placeholder="Enter Username"
               name="uname" 
                onChange={this.handleChangeUsername} required /> 
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" 
             onChange={this.handleChangePassword} required />
            <button className="botonlogin" type="submit">Login</button>
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
