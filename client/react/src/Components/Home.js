import React, {Component} from 'react'
import '../styles/main.css';
import  Projects from './Projects'
import axiosApi from '../axiosApi'


class Home extends Component{
  constructor(){
      super()
      this.state={
        festival : {projectes:[]}//Especifico la forma de festival.projectes per poder 
        // a sota veure quin length te i treballar condicions sobre el length del array. 
      }//Li dic que festival es un objecte que te un array projectes, que ara sta buit
    }

  chooseFestival = (festivalName)=>{
    axiosApi.retrieveFestivalByName(festivalName)
      .then((resp) =>{
        this.setState({
            festival: resp.data
        })
        console.log(this.state)
      })
  }

isFestivalChosen = (festivalName)=>{
 return this.state.festival && this.state.festival.name === festivalName;
}

	render(){
		return (
			<article className=" central ">
            <div className="choose text-center "><h2>CHOOSE A MUSIC EVENT</h2></div>
            <div className="festis text-center">
              <a onClick={() => this.chooseFestival('Cruilla2018')}><img className={"cursorPointer crimg " + (this.isFestivalChosen('Cruilla2018')? "festactive" : "")} src="images/cruillalogo.jpg" alt="Social Beats" /></a>
               <a onClick={()=>this.chooseFestival('Sonar 2018')}><img  className={"cursorPointer soimg " + (this.isFestivalChosen('Sonar 2018')? "festactive" : "")} src="images/sonarlogo.jpg" alt="Social Beats" /></a>
               <a onClick={()=>this.chooseFestival('Primavera Sound 2018')}><img className= {"cursorPointer primg " + (this.isFestivalChosen('Primavera Sound 2018')?"festactive": "")} src="images/primaveralogo.jpg" alt="Social Beats" /></a>
            </div>
           {this.state.festival.projectes.length ? <div className="voluntariados text-center">CHOOSE A VOLUNTEER PROJECT</div> : ''
            }
            {this.state.festival.projectes.length ? this.state.festival.projectes.map((project,i) => <Projects key={i} project={project}  festival={this.state.festival}/>) : undefined
           }
      </article>
      )
	

	}

}

export default Home