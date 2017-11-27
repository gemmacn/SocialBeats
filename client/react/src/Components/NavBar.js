import React, {Component} from 'react'
import '../styles/navBar.css';
import {Link} from 'react-router-dom'


class NavBar extends Component{
  constructor(){
      super()
 }

render(){
	return (<div className=" col-sm-8">
<ul className = "navBar">
  <li className="efect"><a href="default.asp"><span>Log In</span></a></li>
  <li className="efect"><a href="news.asp"><span>Log Out</span></a></li>

</ul>
  </div>)
}



    }



export default NavBar