import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../styles/register.css';
import '../styles/main.css';
import  Projects from './Projects'
import Xtorage from './Xtorage'

class Register extends Component{
   constructor(props){
    super(props)
     // this.state={
     //      name: '',
     //      password:'',
     //      DNI: '',
     //      Gender: '',
     //      Mobil:,
     //      mail:'',
     //    }
  }

// onChange = (e)=>{
// this.setState({
//   name: 
// })
// }

 componentWillMount(){
 this.collaboration = Xtorage.local.getObject('collaboration')
 console.log(this.collaboration)

this.projectName = this.collaboration.festival.projectes.reduce((acc, project) => {
  if (project._id === this.collaboration.projectId) acc += project.name
  return acc
}, '')// Com que tinc el Id del projecte triat, i els projectes dins d'un array, recorrem l'array buscant aquell Id que tenim i treiem el nom del 
//projecte que correspon al Id amb el metode reduce 



  } // al poner el this. delante em treu el valor de la variable 
  //per a tot el component.



	render(){
		return (
       <div className="generalform col-sm-8">
          <div className="container">
            <div className="row">
                    <div className="regprev">
                        <h3 className="col-sm-6">FESTIVAL: {this.collaboration.festival.name}</h3>
                         <h3 className="col-sm-6">ONG: {this.projectName}</h3>
                         <h3 className="col-sm-6">DÍA DEL VOLUNTARIADO: {this.collaboration.dateDay} </h3>
                         <h3 className="col-sm-6">HORAS DE VOLUNTARIADO:{this.collaboration.dateHours}hrs </h3>
                      </div>
                    </div>
            </div>
            <div className="row">
                  <fieldset className="col-sm-12">
                        <form className="form-horizontal">
                                                <legend><h3 className="regtittle">FORMULARIO REGISTRO</h3></legend>
                      {/* Text input*/}
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="Name">Name</label>  
                        <div className="col-md-5">
                          <input id="Name" name="Name" type="text" placeholder="Name" className="form-control input-md" required />
                        </div>
                      </div>
                       <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="UserName">UserName</label>  
                        <div className="col-md-5">
                          <input id="UserName" name="UserName" type="text" placeholder="Username" className="form-control input-md" required />
                        </div>
                      </div>
                      {/* Password input*/}
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="passwordinput">Password</label>
                        <div className="col-md-5">
                          <input id="passwordinput" name="passwordinput" type="password"  className="form-control input-md" required />
                          <span className="help-block">max 16 characters</span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="dni">DNI/NIE</label>
                        <div className="col-md-5">
                          <input id="dniinput" name="dniinput" type="dni"  className="form-control input-md" required />
                        </div>
                      </div>
                      {/* Password input*/}
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="confirm_password">Confirm Password</label>
                        <div className="col-md-5">
                          <input id="confirm_password" name="confirm_password" type="password" placeholder="Re-type password" className="form-control input-md" required />
                        </div>
                      </div>
                      {/* Text input*/}
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="mobilenumber">Mobile Number</label>  
                        <div className="col-md-5">
                          <input id="mobilenumber" name="mobilenumber" type="text" placeholder="Mobile Number" className="form-control input-md" required />
                        </div>
                      </div>
                      {/* Text input*/}
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="emailId">Email </label>  
                        <div className="col-md-6">
                          <input id="emailId" name="emailId" type="text" placeholder="user@domain.com" className="form-control input-md" required />
                        </div>
                      </div>
                      
                      {/* Button */}
                      <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="submit" />
                        <div className="col-md-4">
                          <button id="submit" name="submit" className="btn botoncin">Submit</button>
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
