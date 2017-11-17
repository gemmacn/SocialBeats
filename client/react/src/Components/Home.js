import React, {Component} from 'react'
import '../styles/main.css';
import  Projects from './Projects'
import ProjectsApi from '../ProjectsApi'


class Home extends Component{
  constructor(){
      super()
      this.state={
        Festival_name: '',
        projects: []
      }
    }

  activefestival = (festival)=>{
    console.log("estoy estando")
    this.setState({
     Festival_name:festival
    })
    ProjectsApi.searchProjects(festival)
      .then((data) =>{
        console.log(data.data.data[0].projectes)
        this.setState({
            projects: data.data.data[0].projectes
        })
        console.log(this.state)
      })

  }


	render(){
		return (
			<article className=" central  col-sm-8">
            <div className="choose text-center "><h2>CHOOSE A MUSIC EVENT</h2></div>
            <div className="festis text-center">
              <a onClick={() => this.activefestival('Cruilla2018')}><img  className="crimg" src="images/cruillalogo.jpg" alt="Social Beats" /></a>
               <a onClick={()=>this.activefestival('Sonar 2018')}><img  className="soimg" src="images/sonarlogo.png" alt="Social Beats" /></a>
               <a onClick={()=>this.activefestival('Primavera Sound 2018')}><img className="primg" src="images/primaveralogo.jpg" alt="Social Beats" /></a>
            </div>
           {this.state.projects.length>=1 ? <div className=" voluntariados text-center"><h2>CHOOSE A VOLUNTEER PROJECT</h2></div> : ''
            }
            {this.state.projects.length && this.state.projects.map((project,i) => <Projects key={i} project={project}/>)
           }
      </article>
      )
	

	}

}

export default Home