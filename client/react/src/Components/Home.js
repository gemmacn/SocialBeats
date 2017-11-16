import React, {Component} from 'react'
import {HashRouter, Link, Route} from 'react-router-dom'
import '../styles/main.css';

class Home extends Component{

	render(){
		return (
			<article className=" central  col-sm-8">
            <div className="choose text-center "><b>CHOOSE A MUSIC EVENT</b></div>
            <div className="festis text-center">
              <a href="#"><img className="crimg" src="images/cruillalogo.jpg" alt="Social Beats" /></a>
              <a href="#"><img className="soimg" src="images/sonarlogo.png" alt="Social Beats" /></a>
              <a href="#"><img className="primg" src="images/primaveralogo.jpg" alt="Social Beats" /></a>
            </div>
            <section className="festprojects">
              <div className=" voluntariados text-center"><b>CHOOSE A VOLUNTEER PROJECT</b></div>
              <div className="ong ong1"><h3>KALIZOR</h3><br />"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><button type="button">I want this</button>
              <div className="ong"><h3>BCNGREEN</h3><br />"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><button type="button">I want this</button>
              <div className="ong"><h3>ANIMALISTIC</h3> <br />"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><button type="button">I want this</button>
              <div className="ong"><h3>ASS.DONES RAVAL</h3> <br />"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><button type="button">I want this</button>
            </section>
          </article>)
	

	}

}

export default Home