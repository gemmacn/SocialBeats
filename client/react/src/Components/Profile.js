import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../styles/profile.css';
import axiosApi from '../axiosApi'

class Profile extends Component{

constructor(props){
      super(props)
      this.state={
        photo:'',
       user: {collaborations:[]}
 }
}


componentDidMount(){
      const id = this.props.match.params.id // es una propietat de props que em permet agafar info dels params
      console.log(id)
    axiosApi.getUserProfile(id)// a dalt he importat axiosApi, i aquí crido a la fucnió que tinc allá.
      .then((resp) =>{
        console.log( resp.data.data)
            this.setState({
             user: resp.data.data,
             photo:resp.data.data.photo
            })

        })

}



	render(){
		return (<div className="container">
  <div className="row">
      <div className="perfil col-xs-12 col-sm-6 col-md-6">
        <center><img  className="profile img-responsive" src={this.state.photo} alt="Social Beats"/></center>
      </div>
      <div className="datosp col-xs-12 col-sm-6 col-md-6">
        <h3>Nombre: </h3> {this.state.user.name}<br/>
        <h3>Apellido: </h3>{this.state.user.surname} <br/>
        <h3>Correo Electronico: </h3>{this.state.user.mail}  <br/>
        <h3>DNI/NIE: </h3>{this.state.user.dni} <br/>
        <h3>Tlf: </h3>{this.state.user.mobile} <br/>
      </div>
  </div>
              
    <center><div className="row datosnopersonales">
              <h3>FESTIVAL </h3>
              <ul>
               {
              this.state.user.collaborations.length && this.state.user.collaborations.map((collaboration,i) => 
              <li key={i}>{collaboration.festival}</li>) 
              }
              </ul>
              
              <h3>ONG </h3>
              <ul>
               {
              this.state.user.collaborations.length && this.state.user.collaborations.map((collaboration,i) => 
              <li key={i}>{collaboration.project}</li>) 
              }
              </ul>

              <h3>VOLUNTEERING HOURS </h3>
              <ul>
               {
              this.state.user.collaborations.length && this.state.user.collaborations.map((collaboration,i) => 
              <li key={i}>{collaboration.dateHours}</li>) 
              }
              </ul>

              <h3>DATE</h3> 
              <ul>
               {
              this.state.user.collaborations.length && this.state.user.collaborations.map((collaboration,i) => 
               <li key={i}>{collaboration.dateDay}</li>) 
              }
              </ul>
              <h3>State:</h3><br/><span className="ongalert">Need confirmation from the ONG</span>
              </div></center>
</div>
  )
	}
}


export default Profile