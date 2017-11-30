import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Static from './Components/Static'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Register from './Components/Register'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import './styles/main.css';




class App extends Component{
	render(){
		return (<div className="container-fluid">
			<div className="row">
				<div className="col-sm-4">
					<Static/>
				</div>
				<div className="col-sm-8">
					<NavBar/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/profile/:id" component={Profile} />
					</Switch>
				</div>
			</div>
		</div>)
	}
}


export default App;
