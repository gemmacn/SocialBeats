import React, { Component } from 'react';
import {BrowserRouter, Switch,Link,Route,Redirect} from 'react-router-dom'
import '../styles/register.css';
import '../styles/main.css';
import  Projects from './Projects'
import Xtorage from './Xtorage'
import axiosApi from '../axiosApi'


class Register extends Component{
   constructor(props){
    super(props)
     this.state={
    name:'',
    surname:'',
    username:'',
    password:'',
    confirm_password:'',
    dni:'',
    mobile:'',
    mail:'',
    redirect:false,
    id: ''
     }
     this.handleInputChange = this.handleInputChange.bind(this);
     this.submitInfo = this.submitInfo.bind(this);
  }

handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state)
  }


submitInfo (e){
  e.preventDefault()
  const completedUser={
    name:this.state.name,
    surname:this.state.surname,
    username:this.state.username,
    password:this.state.password,
    dni:this.state.dni,
    mobile:this.state.mobile,
    mail:this.state.mail,
    photo:this.state.photo,
    collaborations:[{
      festival:this.collaboration.festival,
      project:this.collaboration.project ,
      projectId:this.collaboration.projectId,
      dateDay:this.collaboration.dateDay ,
      dateHours:this.collaboration.dateHours 
    }]
  }
console.log(completedUser, 'completed useeeeeeeeeerr')
this.userCompleteInfo(completedUser)
}


userCompleteInfo = (completedUser)=>{
    axiosApi.UserProfile(completedUser)// a dalt he importat axiosApi, i aquí crido a la fucnió que tinc allá.
      .then(resp =>{
         this.setState({ 
          redirect: true, // manejo l'estat per poder fer el Link to i redireccionar
          id: resp.data.data._id  // de la resposta que tinc de la base de dades amb la info 
          //agafo l'Id per usarlo en la redireccio pq vagi al perfil d'aquest usuari en concret en els params de la url va
       })
      })
        console.log(this.state)
      
  }





 componentWillMount(){
 this.collaboration = Xtorage.local.getObject('collaboration')
 console.log(this.collaboration)

// this.projectName = this.collaboration.festival.projectes.reduce((acc, project) => {
//   if (project._id === this.collaboration.projectId) acc += project.name
//   return acc
// }, '')// Com que tinc el Id del projecte triat, i els projectes dins d'un array, recorrem l'array buscant aquell Id que tenim i treiem el nom del 
// //projecte que correspon al Id amb el metode reduce 

  } // al poner el this. delante em treu el valor de la variable 
  //per a tot el component.




	render(){
		return (
       <div className="generalform col-sm-8">
          <div className="container">
            <div className="row">
                    <div className="regprev">
                        <h3 className="col-sm-6">FESTIVAL: {this.collaboration.festival}</h3>
                         <h3 className="col-sm-6">ONG: {this.collaboration.project}</h3>
                         <h3 className="col-sm-6">DÍA DEL VOLUNTARIADO: {this.collaboration.dateDay} </h3>
                         <h3 className="col-sm-6">HORAS DE VOLUNTARIADO:{this.collaboration.dateHours}hrs </h3>
                      </div>
                    </div>
            </div>
            <div className="row">
                  <fieldset className="col-sm-12">
                        <form  onSubmit={this.submitInfo}  className="form-horizontal">
                          <legend><h3 className="regtittle">FORMULARIO REGISTRO</h3></legend>
                      {/* Text input*/}
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="Name">Name</label>  
                        <div className="col-md-5">
                          <input id="Name" name="name" onChange={this.handleInputChange} type="text" placeholder="Name" className="form-control input-md" required />
                        </div>
                      </div>
                            <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="surname">Surname</label>  
                        <div className="col-md-5">
                          <input id="Surname" name="surname" onChange={this.handleInputChange} type="text" placeholder="surname" className="form-control input-md" required />
                        </div>
                      </div>
                       <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="username">UserName</label>  
                        <div className="col-md-5">
                          <input id="username" name="username" onChange={this.handleInputChange} type="text" placeholder="Username" className="form-control input-md" />
                        </div>
                      </div>
                      {/* Password input*/}
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="password">Password</label>
                        <div className="col-md-5">
                          <input id="password" name="password" onChange={this.handleInputChange} type="password"  className="form-control input-md"  />
                          
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="dni">DNI/NIE</label>
                        <div className="col-md-5">
                          <input id="dni" name="dni" onChange={this.handleInputChange} type="dni"  className="form-control input-md"  />
                        </div>
                      </div>

                      {/* Text input*/}
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="mobile">Mobile Number</label>  
                        <div className="col-md-5">
                          <input id="mobile" name="mobile" onChange={this.handleInputChange}  type="text" placeholder="Mobile Number" className="form-control input-md" />
                        </div>
                      </div>
                      {/* Text input*/}
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="mail">Email </label>  
                        <div className="col-md-6">
                          <input id="mail" name="mail" onChange={this.handleInputChange} type="text" placeholder="user@domain.com" className="form-control input-md" />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="photo">Photo</label>  
                        <div className="col-md-6">
                          <input id="photo" name="photo" onChange={this.handleInputChange} type="text" placeholder="copy a photo URL" className="form-control input-md" />
                        </div>
                      </div>
                      
                      {/* Button */}
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="submit" />
                        <div className="col-md-4">
                        {this.state.redirect === true? <Redirect to={`/profile/${this.state.id}`} /> : undefined}
                        <button type="submit"  name="submit" value="Submit" className="btn botoncin">Submit</button>
                        </div>
                      </div>
                        </form>
                    </fieldset>
            </div>
          </div>
)
	}
}


export default Register
