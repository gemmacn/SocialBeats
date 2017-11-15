import React, { Component } from 'react';

class App extends Component {
  render() {
    return (<div className="App">
       <div class="row">
        <article class=" art1 col-sm-4">
            <div class="tittle col-sm-6">AHEAD IN URBAN CULTURE <br>AND SOCIAL COMPROMISE</div>
            <div class="descrip col-sm-6">SOCIAL<br>BEATS</div>
            <div class=" text1 col-sm-12">Social Beats is a non-profit-making project, born and raised in Barcelona thanks to the collaboration between social entities and the most relevant music events in town.</div>
            <div class="text2 col-sm-12">Social Beats es un proyecto sin ánimo de lucro fecundado, nacido y crecido en Barcelona gracias a la colaboración entre entidades sociales y los eventos musicales más conocidos de la ciudad.</div>
        </article>
        <article class=" central  col-sm-8" >
            <div class="choose text-center "><bold>CHOOSE A MUSIC EVENT</bold></div>
            <div class="festis text-center">
                <a href="#"><img   class="crimg" src="images/cruillalogo.jpg" alt="Social Beats"></a>
                <a href="#"><img  class="soimg"src="images/sonarlogo.png" alt="Social Beats"></a>
                <a href="#"><img  class="primg" src="images/primaveralogo.jpg" alt="Social Beats"></a>
            </div>
            <section class="festprojects">
               <div class=" voluntariados text-center"><bold>CHOOSE A VOLUNTEER PROJECT</bold></div>
               <div class="ong ong1"><h3>KALIZOR</h3><br>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><button type="button">I want this</button>
               <div class="ong"><h3>BCNGREEN</h3><br>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><button  type="button">I want this</button>
               <div class="ong"><h3>ANIMALISTIC</h3> <br>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><button type="button">I want this</button>
               <div class="ong"><h3>ASS.DONES RAVAL</h3> <br>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div><button type="button">I want this</button>
           </section>
        </article>
        </div>
      </div>
    );
  }
}

export default App;
