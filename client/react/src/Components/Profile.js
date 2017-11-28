import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../styles/profile.css';

class Profile extends Component{
	render(){
		return (<div className="row">
      <div className=" perfil  d-flex align-self-center col-sm-6">
        <center><img  className="profile  img-responsive" src="../images/userprofile.jpg" alt="Social Beats"/></center>
      </div>
      <center><div className="datos col-sm-4">
            <h3>Nombre:</h3> Anna Martínez<br/>
            <h3>Correo Electronico:</h3> annamartinez@gmail.com<br/>
            <h3>DNI/NIE:</h3> 65454683g<br/>
            <h3>Tlf:</h3> 6595451200<br/>
            <h3>I'm going to:</h3>SONAR
            <h3>I'm volunteering at:</h3>KALIZOR
            <h3>Hours:</h3> 4hrs<br/>
            <h3>Date:</h3> 24/11/2017<br/>
            <h3>State:</h3> Need confirmation from the ONG<br/>
            <h3>Info:</h3> lorem ipsum concillitum sunimet ad ardua aspera absurda vida"
      </div></center>
</div>)
	}
}


export default Profile