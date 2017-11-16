import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


class Static extends Component{
	render(){
		return (
          <article className=" art1 col-sm-4">
            <div className="tittle col-sm-6">AHEAD IN URBAN CULTURE <br />AND SOCIAL COMPROMISE</div>
            <div className="descrip col-sm-6">SOCIAL<br />BEATS</div>
            <div className=" text1 col-sm-12">Social Beats is a non-profit-making project, born and raised in Barcelona thanks to the collaboration between social entities and the most relevant music events in town.</div>
            <div className="text2 col-sm-12">Social Beats es un proyecto sin ánimo de lucro fecundado, nacido y crecido en Barcelona gracias a la colaboración entre entidades sociales y los eventos musicales más conocidos de la ciudad.</div>
          </article>
       )
	}
}


export default Static
