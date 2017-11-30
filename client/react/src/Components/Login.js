import React, { Component } from 'react';
import {BrowserRouter, Switch, Route,withRouter} from 'react-router-dom'
import '../styles/login.css';
import axiosApi from '../axiosApi'
import Xtorage from './Xtorage'

class Login extends Component{
constructor(props){
  super(props)
    this.state={
      username: '',
      password:'',
      badlogin:false
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
      project:this.collaboration.project ,
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
        if(resp.data.data._id){
          const id = resp.data.data._id
          this.props.history.push(`/profile/${id}`)// aquí no posem ':id'  pq no es la ruta general on anirán els id sino la const id que 
        } else {// es diferent en cada cas y depén de la resposta qu reben d BD el :id esta en les rutes a APP
          this.setState({
            badlogin:true
          })
        }
      })
  }


	render(){
		return (<div className=" loginform col-md-offset-1  col-sm-5">
        <form onSubmit={this.submitLogin}>
          <div className="container logcapsa">
            <label><b>Username</b></label>
              <input  type="text" placeholder="Enter Username"name="username" 
                onChange={this.handleInputChange} required /> 
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" 
             onChange={this.handleInputChange} required />
            <button className="botoncin" type="submit"  name="submit" value="Submit">Login</button>
          </div>
        </form>
          <div style={{display: this.state.badlogin ? 'block' : 'none' }} className= "badlogin"> INVALID USERNAME OR PASSWORD</div>
      </div>)
	}
}


export default withRouter (Login)
