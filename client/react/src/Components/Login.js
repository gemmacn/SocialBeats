import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../styles/login.css';
import axiosApi from '../axiosApi'
import Xtorage from './Xtorage'

class Login extends Component{
constructor(){
  super()
    this.state={
      username: '',
      password:''
    }
this.handleInputChange = this.handleInputChange.bind(this);
this.submitLogin= this.submitLogin.bind(this)
}

handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state)
  }

collaboration = Xtorage.local.getObject('collaboration')


submitLogin (e){
  e.preventDefault()
  const logInInfo={
    username:this.state.username,
    password:this.state.password,
    collaborations:[{
      festival:this.collaboration.festival,
      project:this.collaboration.ongName ,
      projectId:this.collaboration.projectId,
      dateDay:this.collaboration.dateDay ,
      dateHours:this.collaboration.dateHours 
    }]
  }
this.loginData(logInInfo)
console.log(logInInfo)
//this.userCompleteInfo(completedUser)
}

loginData = (logInInfo)=>{
    axiosApi.sendLogIn(logInInfo)// a dalt he importat axiosApi, i aquí crido a la fucnió que tinc allá.
      .then(resp =>{ 
        console.log(resp)
      })
  }


	render(){
		return (<div className=" loginform col-md-offset-1  col-sm-5">
        <form onSubmit={this.submitLogin}>
          <div className="container">
            <label><b>Username</b></label>
              <input  type="text" placeholder="Enter Username"name="username" 
                onChange={this.handleInputChange} required /> 
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" 
             onChange={this.handleInputChange} required />
            <button className="botoncin"  type="submit"  name="submit" value="Submit">Login</button>
          </div>
        </form>
      </div>)
	}
}


export default Login
