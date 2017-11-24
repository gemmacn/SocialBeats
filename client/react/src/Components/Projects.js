import React, {Component} from 'react'
import {HashRouter, Link, Route, Redirect} from 'react-router-dom'
import '../styles/main.css';
import axiosApi from '../axiosApi'
import Xtorage from './Xtorage'


class Projects extends Component{
  constructor(props){
    super(props)
    this.state={
          checked: false,
          date:'',
          redirect: false,
          status:''
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
    Xtorage.local.setObject('collaboration', collaboration)
   console.log('hola jalbert')

   //sessionStorage.setItem('collaboration', JSON.stringify(collaboration));

  axiosApi.collaborate(userId,collaboration.festival._id,collaboration.projectId,collaboration.dateDay,collaboration.dateHours)
  .then((response) =>{response.data.status ==='KO' ?  this.setState({status:'KO'}) : this.setState({redirect: true})})
  .catch(console.error)
}

// {this.state.festival.projectes.length && this.state.festival.projectes.map((project,i) => <Projects key={i} project={project}  festival={this.state.festival}/>)
           

	render(){
    console.log(this.props.project.available_dates,'hola')
    if(this.state.redirect) return <Redirect to='/register/' />
    else return (
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
              data-toggle="modal" data-target={"#confirmInfo-" + this.state.checked}> Apuntarme!</button>
                  <div id={"confirmInfo-" + this.state.checked} className="modal fade" role="dialog">
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h4 className="modal-title  text-center">EVENTO: {this.props.festival.name}</h4>
                                    </div>
                                    <div className="modal-body">
                                      <div>
                                        <h4 className="modal-title  text-center">ONG SELECCIONADA: {this.props.project.name}</h4>
                                        <span>FECHA ESCOGIDA: {this.state.dateDay}</span><br/>
                                        <span>HORAS DE VOLUNTARIADO:{this.state.dateHours}</span>
                                      </div>
                                      <div className="row">
                                          <div className="col-12-xs text-center">
                                             <Link to='/register/'><button  className="btn btn-success btn-md but" data-dismiss="modal"
                                              onClick={() => this.collaborate()}>Si</button></Link>
                                              <button className="btn btn-danger btn-md but" data-dismiss="modal">No</button>
                                          </div>
                                           {this.state.status ==='KO' ? <div>No puedes participar mas</div> : <div> Si puedes participar</div>}
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

