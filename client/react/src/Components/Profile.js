import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../styles/profile.css';
import axiosApi from '../axiosApi'

class Profile extends Component{

constructor(props){
      super(props)
      this.state={
       user: {collaborations:[]}
 }
}


componentDidMount(){
      const id = this.props.match.params.id // es una propietat de props que em permet agafar info dels params
      console.log(id)
    axiosApi.getUserProfile(id)// a dalt he importat axiosApi, i aquí crido a la fucnió que tinc allá.
      .then((resp) =>{
            this.setState({
             user: resp.data.data
            })

      console.log(resp)
        })

}



	render(){
		return (<div className="row">
      <div className=" perfil  d-flex align-self-center col-sm-6">
        <center><img  className="profile  img-responsive" src="../images/userprofile.jpg" alt="Social Beats"/></center>
      </div>
      <center><div className="datos col-sm-4">
            <h3>Nombre:</h3> {this.state.user.name}<br/>
            <h3>Apellido:</h3>{this.state.user.surname} <br/>
            <h3>Correo Electronico:</h3>{this.state.user.mail}  <br/>
            <h3>DNI/NIE:</h3>{this.state.user.dni} <br/>
            <h3>Tlf:</h3>{this.state.user.mobile} <br/>
            <h3>Im going to:</h3>
            <ul>
             {
            this.state.user.collaborations.length && this.state.user.collaborations.map((collaboration,i) => 
            <li key={i}>{collaboration.festival}</li>) 
            }
            </ul>
            
            <h3>Hours </h3>
            <ul>
             {
            this.state.user.collaborations.length && this.state.user.collaborations.map((collaboration,i) => 
            <li key={i}>{collaboration.dateHours}</li>) 
            }
            </ul>

            <h3>Date:</h3> 
            <ul>
             {
            this.state.user.collaborations.length && this.state.user.collaborations.map((collaboration,i) => 
             <li key={i}>{collaboration.dateDay}</li>) 
            }
            </ul>
            <h3>State:</h3> Need confirmation from the ONG<br/>
      </div></center>
</div>)
	}
}


export default Profile