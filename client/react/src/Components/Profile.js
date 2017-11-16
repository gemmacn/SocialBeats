import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../styles/profile.css';

class Profile extends Component{
	render(){
		return (<div className="col-sm-8">
      <div className=" perfil  d-flex align-self-center col-sm-6">
        <img  className="profile  img-responsive" src="../images/userprofile.jpg" alt="Social Beats"/>
      </div>
      <div className="datos col-sm-4">
            <h2>Nombre:</h2> Anna Martínez<br/>
            <h2>Correo Electronico:</h2> annamartinez@gmail.com<br/>
            <h2>DNI/NIE:</h2> 65454683g<br/>
            <h2>Tlf:</h2> 6595451200<br/>
            <h2>I'm going to:</h2>SONAR
            <h2>I'm volunteering at:</h2>KALIZOR
            <h2>Hours:</h2> 4hrs<br/>
            <h2>Date:</h2> 24/11/2017<br/>
            <h2>State:</h2> Need confirmation from the ONG<br/>
            <h2>Info:</h2> lorem ipsum concillitum sunimet ad ardua aspera absurda vida"
      </div>
</div>)
	}
}


export default Profile