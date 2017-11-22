import React, {Component} from 'react'
import {HashRouter, Link, Route} from 'react-router-dom'
import '../styles/main.css';
import axiosApi from '../axiosApi'
import Xtorage from './Xtorage'


class Projects extends Component{
  constructor(props){
    super(props)
    this.state={
          checked: false,
          date:''
        }

  }

  CheckedDates=(dateDay,dateHours)=>{

    this.setState({
                dateDay: dateDay,
                dateHours:dateHours,
                checked:true
            })
    
  }

  collaborate=() => {

  const userId = Xtorage.local.get('userId')

 var  collaboration = {
  festival: this.props.festival,
  projectId: this.props.project._id,
  dateDay:this.state.dateDay,
  dateHours:this.state.dateHours
 }

 console.log(collaboration)

 //sessionStorage.setItem('collaboration', JSON.stringify(collaboration));

axiosApi.collaborate(userId,collaboration.festival._id,collaboration.projectId,collaboration.dateDay,collaboration.dateHours)
}



	render(){
    console.log(this.props.project.available_dates,'hola')
		return (
       <section className="festprojects">
              <div className="ong ong1"><h3>{this.props.project.name}</h3><br />
              <span>{this.props.project.description}</span>
              <span>{this.props.project.location}</span>
              <div className="container">
              <ul className="list">
                {this.props.project.available_dates.map((date)=>
                <li className="list__item">
                <input type="radio" className="radio-btn" name="choice" id={date._id} 
                value={date.day} onChange={()=> this.CheckedDates(date.day,date.hours)}/>
                <label for="a-opt" className="label"> Días disponibles: {date.day}<br/> Horas: {date.hours} Hrs</label>
               </li>)}
              </ul>
              </div>
              <button className="btn  btn-xs but" type="button" 
              data-toggle="modal" data-target={"#confirmInfo-" + this.state.id}> Apuntarme!</button>
                  <div id={"confirmInfo-" + this.state.id} className="modal fade" role="dialog">
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h4 className="modal-title  text-center">EVENTO: {this.props.festival}</h4>
                                    </div>
                                    <div className="modal-body">
                                      <div>
                                        <h4 className="modal-title  text-center">ONG SELECCIONADA: {this.props.project.name}</h4>
                                        <span>FECHA ESCOGIDA: {this.state.dateDay}</span><br/>
                                        <span>HORAS DE VOLUNTARIADO:{this.state.dateHours}</span>
                                      </div>
                                      <div className="row">
                                          <div className="col-12-xs text-center">
                                             <Link to='/register/'> <button  className="btn btn-success btn-md but" data-dismiss="modal"
                                              onClick={() => this.collaborate()}>Si</button></Link>
                                              <button className="btn btn-danger btn-md but" data-dismiss="modal">No</button>
                                          </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

              </div>
      </section>
)
	}

}

export default Projects

