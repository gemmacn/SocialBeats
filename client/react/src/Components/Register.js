import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../styles/register.css';
import  Projects from './Projects'
import Xtorage from './Xtorage'

class Register extends Component{
   constructor(props){
    super(props)
  }


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
 <div className="col-sm-8">
        <div className="container">
          <div className="row">
            <form className="form-horizontal">
            <div>
            {this.collaboration.festival.name}<br/>
            {this.projectName}<br/>
            {this.collaboration.dateDay}<br/>
            {this.collaboration.dateHours}

            </div>
              <fieldset>
                {/* Form Name */}
                <legend><h3>FORMULARIO REGISTRO</h3></legend>
                {/* Text input*/}
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="Name">Name</label>  
                  <div className="col-md-5">
                    <input id="Name" name="Name" type="text" placeholder="username" className="form-control input-md" required />
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
                {/* Multiple Radios (inline) */}
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="gender">Gender</label>
                  <div className="col-md-4"> 
                    <label className="radio-inline" htmlFor="gender-0">
                      <input type="radio" name="gender" id="gender-0" defaultValue="Male" defaultChecked="checked" />
                      Male
                    </label> 
                    <label className="radio-inline" htmlFor="gender-1">
                      <input type="radio" name="gender" id="gender-1" defaultValue="Female" />
                      Female
                    </label>
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
                {/* Prepended checkbox */}
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="check_critiria">Check the box</label>
                  <div className="col-md-6">
                    <div className="input-group">
                      <span className="input-group-addon">     
                        <input type="checkbox" />     
                      </span>
                      <input id="check_critiria" name="check_critiria" className="form-control" type="text" placeholder="Accepto las condiciones" required />
                    </div>
                  </div>
                </div>
                {/* Button */}
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="submit" />
                  <div className="col-md-4">
                    <button id="submit" name="submit" className="btn btn-success">Submit</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
)
	}
}


export default Register
