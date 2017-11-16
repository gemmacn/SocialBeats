import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Static from './Components/Static'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Register from './Components/Register'
import Home from './Components/Home'
import './styles/main.css';




class App extends Component{
	render(){
		return (<div className="row">
			<Static/>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/profile" component={Profile} />
			</Switch>
		</div>)
	}
}


export default App;
