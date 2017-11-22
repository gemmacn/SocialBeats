import React, {Component} from 'react'
import '../styles/main.css';
import  Projects from './Projects'
import axiosApi from '../axiosApi'


class Home extends Component{
  constructor(){
      super()
      this.state={
        festival : {}
      }
    }

  chooseFestival = (festivalName)=>{
    axiosApi.retrieveFestivalByName(festivalName)
      .then((festival) =>{
        this.setState({
            festival: festival
        })
        console.log(this.state)
      })
  }


	render(){
		return (
			<article className=" central  col-sm-8">
            <div className="choose text-center "><h2>CHOOSE A MUSIC EVENT</h2></div>
            <div className="festis text-center">
              <a onClick={() => this.chooseFestival('Cruilla2018')}><img  className="crimg" src="images/cruillalogo.jpg" alt="Social Beats" /></a>
               <a onClick={()=>this.chooseFestival('Sonar 2018')}><img  className="soimg" src="images/sonarlogo.png" alt="Social Beats" /></a>
               <a onClick={()=>this.chooseFestival('Primavera Sound 2018')}><img className="primg" src="images/primaveralogo.jpg" alt="Social Beats" /></a>
            </div>
           {this.state.festival.projects.length ? <div className=" voluntariados text-center"><h2>CHOOSE A VOLUNTEER PROJECT</h2></div> : ''
            }
            {this.state.festival.projects.length && this.state.festival.projects.map((project,i) => <Projects key={i} project={project}  festival={this.state.festival}/>)
           }
      </article>
      )
	

	}

}

export default Home