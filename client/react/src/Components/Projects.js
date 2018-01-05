import React, {Component} from 'react'
import {HashRouter, Link, Route, withRouter} from 'react-router-dom'
import '../styles/main.css';
import '../styles/projects.css';
import axiosApi from '../axiosApi'
import Xtorage from './Xtorage'


class Projects extends Component{
constructor(props){
    super(props)
    this.state={
          checked: false,
          date:'',
          redirect: false,
          //status:'OK'
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
  //el xtorage.local.set el faig en el Index.js de React. Aquí recupero el id del usuari
      const { name}  = this.props.festival.projectes.filter(project => this.props.project._id === project._id)[0]
     var  collaboration = {
      festival: this.props.festival.name,
      project: name,
      projectId: this.props.project._id,
      dateDay:this.state.dateDay,
      dateHours:this.state.dateHours
     }
      Xtorage.local.setObject('collaboration', collaboration) //('key',value) es el format del localstorage
     console.log(collaboration, 'localstorage')


    // axiosApi.collaborate(userId,collaboration.festival._id,collaboration.projectId,collaboration.dateDay,collaboration.dateHours)
    // .then((response) =>{response.data.status ==='OK' ?  this.setState({status:'KO'}) : this.setState({status:'OK'}) /*this.setState({redirect: true})*/})
    // .catch(console.error)
}
register = ()=>{
  this.props.history.push('/register'); // history es un objeto que viene de react y tiene metodos como push para cambios de location
}
login = ()=>{
  this.props.history.push('/login');
}
homeBack =()=>{
this.props.history.push('/');
}
onLogin=()=>{
  this.collaborate();
  this.login();
}

onRegister=()=>{
  this.collaborate();
  this.register();
}

// tryCollaboration = () => {
//    this.setState({status: undefined})// me limpia el estado de la llamada axios anterior, la llamo desde el boton Apuntame
// }


	render(){
    console.log(this.props.project.available_dates,'hola')
    return (
       <section className="festprojects">
              <div className="ong ong1"><h3>{this.props.project.name}</h3><br />
              <span classsName="pdescrip">{this.props.project.description}</span>
              <span>{this.props.project.location}</span>
              <div className="container">
              <ul className="list">
                {this.props.project.available_dates.map((date)=>
                  <li className="list__item">
                    <input type="radio" className=" radios radio-btn" name="choice" id={date._id} 
                    value={date.day} onChange={()=> this.CheckedDates(date.day,date.hours)}/>
                    <label for="a-opt" className="label"> Días disponibles: {date.day}<br/> Horas: {date.hours} Hrs</label>
                 </li>)}
              </ul>
              </div>
              <button className="btn botoncin btn-xs but" type="button" 
              data-toggle="modal" data-target={"#confirmInfo-" + this.props.project._id} onClick={this.tryCollaboration}> PARTICIPAR AQUI</button>
                  <div id={"confirmInfo-" + this.props.project._id} className="modal fade" role="dialog">
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h3 className="modal-title  text-center"> {this.props.festival.name}</h3>
                                    </div>
                                    <div className="modal-body">
                                      <div>
                                        <h3 className="modal-title ">ONG SELECCIONADA: {this.props.project.name}</h3><br/>
                                        <h3>FECHA ESCOGIDA: {this.state.dateDay}</h3><br/>
                                        <h3>HORAS DE VOLUNTARIADO: {this.state.dateHours}</h3>
                                      </div>
                                      <div className="row">
                                          <div className="col-12-xs text-center">
                                           
                                             <button className= "botoncin" onClick={this.onRegister} data-dismiss="modal"> REGISTER ME</button>
                                            <button className= "botoncin" onClick={this.onLogin} data-dismiss="modal"> LOG IN </button>
                                          <button className= "botoncin" onClick={this.homeBack} data-dismiss="modal"> NO, GO BACK </button>
                        
                                             
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

export default withRouter(Projects)
 // withrouter es per permetre les redireccions via props.history.push('/register');


 // // <button className="botoncin" className={!this.state.status ? 
 //                                                'btn  botoncin btn-md but' :
 //                                                this.state.status ==='KO' ? 
 //                                                'btn  botoncin btn-md but' : 
 //                                                'btn  botoncin btn-md but'} data-dismiss="modal">{!this.state.status? 
 //                                                  'NO, GO BACK' : 
 //                                                  'RETURN TO BEGINING'}</button>