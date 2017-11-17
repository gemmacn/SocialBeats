import React, {Component} from 'react'
import {HashRouter, Link, Route} from 'react-router-dom'
import '../styles/main.css';

class Projects extends Component{
constructor(props){
  super(props)

}

	render(){
    console.log(this.props.project)
		return (
       <section className="festprojects">
              <div className="ong ong1"><h3>{this.props.project.name}</h3><br />"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><button type="button">I want this</button>
      </section>
)
	

	}

}

export default Projects