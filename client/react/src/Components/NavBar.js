import React, {Component} from 'react'
import '../styles/navBar.css';
import {Link,withRouter} from 'react-router-dom'


class NavBar extends Component{
  constructor(props){
      super(props)
 }

 toLogin =()=>{
this.props.history.push('/login');
}

 toLogout =()=>{
this.props.history.push('/');
}

render(){
	return (<div >
<ul className = "navBar">
  <li className="efect" onClick={this.toLogin}>Log In</li>
  <li className="efect" onClick={this.toLogout}>Log Out</li>
</ul>
  </div>)
}



    }



export default withRouter(NavBar)