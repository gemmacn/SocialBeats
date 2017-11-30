import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
import '../styles/static.css';


class Static extends Component{
	render(){
		return (
      <div>
          <article className="art1">
            <div className="ahead col-sm-6">AHEAD IN URBAN CULTURE <br />AND SOCIAL COMPROMISE</div>
           <Link to="/"> <div className="descrip col-sm-6">SOCIAL<br />BEAT</div></Link>
            <div className=" text1 col-sm-12">Social Beats is a non-profit-making project, born and raised in Barcelona thanks to the collaboration between social entities and the most relevant music events in town.</div>
            <div className="text2 col-sm-12">Social Beats es un proyecto sin ánimo de lucro gestado, nacido y crecido en Barcelona gracias a la colaboración entre entidades sociales y los eventos musicales más conocidos de la ciudad.</div>
          </article>
        </div>
       )
	}
}


export default Static
