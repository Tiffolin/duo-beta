import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Splash from "./component/Splash";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Main from "./component/Main";
import Cakes from "./component/Cakes";
import Whole from "./component/Whole";
import Single from "./component/Single";
import Viennoiseries from "./component/Viennoiseries";
import PoundCakes from "./component/PoundCakes";
import Drinks from "./component/Drinks";

// import Career from "./component/Career";
import LocationHours from "./component/LocationHours";
// import Footer from "./component/Footer";

class App extends Component{
  render() {
    return(
      <div id='App'>
        <BrowserRouter>

          <div><Splash /></div>
          
          <div>
          <Navbar />
          {/* <Route exact path="/" component={Splash} /> */}
          <Route exact path="/" component={About} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Cakes" component={Cakes} />
          <Route exact path="/Whole" component={Whole} />
          <Route exact path="/Single" component={Single} />
          <Route exact path="/Viennoiseries" component={Viennoiseries} />
          <Route exact path="/PoundCakes" component={PoundCakes} />
          <Route exact path="/Drinks" component={Drinks} />
          <Route exact path="/LocationHours" component={LocationHours} />
          {/* <Footer/> */}
          </div>
      </BrowserRouter>

   
    </div>
    
    );
  }
}

export default App;
