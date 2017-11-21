import React, {Component} from 'react'
import '../styles/main.css';
import {Link} from 'react-router-dom'


class NavBar extends Component{
  constructor(){
      super()
 }

render(){
	return (<div className=" col-sm-8">
<nav className="navbar navbar-default">
      <div className="container navegacion">
        <div className="navbar-header">
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login">LogIn</Link></li>
            <li><a href="#">LogOut</a></li>
          </ul>
        </div>
      </div>
    </nav>
	</div>)
}



    }



export default NavBar