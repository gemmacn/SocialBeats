import React, {Component} from 'react'
import '../styles/main.css';
import  Projects from './Projects'
import ProjectsApi from '../ProjectsApi'


class Home extends Component{
constructor(){
    super()
    this.state={
      currentFestival: ''
    }
  }

activefestival = (festival)=>{
console.log("estoy estando")
this.setState({
  currentFestival:festival
})

ProjectsApi.searchProjects(festival)

}


	render(){
		return (
			<article className=" central  col-sm-8">
            <div className="choose text-center "><h2>CHOOSE A MUSIC EVENT</h2></div>
            <div className="festis text-center">
              <a onClick={() => this.activefestival('cruilla')}><img  className="crimg" src="images/cruillalogo.jpg" alt="Social Beats" /></a>
               <a onClick={()=>this.activefestival('sonar')}><img  className="soimg" src="images/sonarlogo.png" alt="Social Beats" /></a>
               <a onClick={()=>this.activefestival('primavera')}><img className="primg" src="images/primaveralogo.jpg" alt="Social Beats" /></a>
            </div>
           {
            this.state.currentFestival && <Projects festival={this.state.currentFestival}/>
           }
      </article>
      )
	

	}

}

export default Home