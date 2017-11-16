import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../styles/register.css';


class Register extends Component{
	render(){
		return (
 <div className="col-sm-8">
        <div className="container">
          <div className="row">
            <form className="form-horizontal">
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
                    <input id="passwordinput" name="passwordinput" type="password" placeholder className="form-control input-md" required />
                    <span className="help-block">max 16 characters</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="dni">DNI/NIE</label>
                  <div className="col-md-5">
                    <input id="dniinput" name="dniinput" type="dni" placeholder className="form-control input-md" required />
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
                {/* Textarea */}
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="address">Address</label>
                  <div className="col-md-4">                     
                    <textarea className="form-control" id="address" name="address" defaultValue={"default text"} />
                  </div>
                </div>
                {/* Select Basic */}
                <div className="form-group">
                  <label className="col-md-4 control-label" htmlFor="country">Country</label>
                  <div className="col-md-5">
                    <select id="country" name="country" className="form-control">
                      <option value="España">España</option>
                      <option value="Francia">Francia</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Italia">Italia</option>
                    </select>
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
                  <label className="col-md-4 control-label" htmlFor="emailId">Email Id</label>  
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
