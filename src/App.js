import React, { Component } from 'react';
import TopBar from "./TopBar.js";
// import Navbar from "./Navbar.js";
import FrontPage from "./Pages/FrontPage";
import {Route, Switch} from "react-router-dom";
import AboutUs from "./Pages/AboutUs/";
import Awards from "./Pages/Awards/";
import Location from "./Pages/Location";
import Services from "./Pages/Services/";
import BottomButtons from "./BottomButtons.js";
import ColonoscopyCancerScreening from "./Pages/Services/ColonoscopyCancerScreening"
import UpperEndoscopy from "./Pages/Services/UpperEndoscopy";
import GIMotilityClinic from "./Pages/Services/GIMotilityClinic/"
import CapsuleEndoscopy from "./Pages/Services/CapsuleEndoscopy"
import ViralHepatitisClinic from './Pages/Services/ViralHepatitisClinic.js';
import SmartPill from "./Pages/Services/GIMotilityClinic/SmartPill.js";
import EsophagealManometry from "./Pages/Services/GIMotilityClinic/EsophagealManometry.js";
import EsophagealPH from "./Pages/Services/GIMotilityClinic/EsophagealPH.js";
import HPyloriBreathTest from "./Pages/Services/GIMotilityClinic/HPyloriBreathTest.js";
import HydrogenBreathTest from "./Pages/Services/GIMotilityClinic/HydrogenBreathTest.js";
import DrFajardo from "./Pages/AboutUs/DrFajardo.js";
import DrCremonini from "./Pages/AboutUs/DrCremonini.js";
import Footer from "./Footer.js"
import logo from "./Images/transparentlogo.png";

class App extends Component {
  constructor(){
    super();

    this.state = {
      doneLoading: false
    }
    this.timer = this.timer.bind(this);
  }
  
  componentDidMount(){
    this.timer();
  }

  timer() {
    setTimeout(() => {
      this.setState({doneLoading: true})
    }, 1500);
  }


  render() {
    let data;
    if(this.state.doneLoading) {
      data =       
      <div className="app">
        <TopBar />
        {/* <Navbar /> */}
        <Switch> 
            <Route exact path="/" component={FrontPage} /> 
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Awards" component={Awards} />
            <Route path="/Location" component={Location} />
            <Route path="/Services" component={Services} />
            <Route path="/ColonoscopyCancerScreening" component={ColonoscopyCancerScreening} />
            <Route path="/UpperEndoscopy" component={UpperEndoscopy} />
            <Route path="/CapsuleEndoscopy" component={CapsuleEndoscopy} />
            <Route path="/GIMotilityClinic" component={GIMotilityClinic} />
            <Route path="/ViralHepatitisClinic" component={ViralHepatitisClinic} />
            <Route path="/SmartPill" component={SmartPill} />
            <Route path="/EsophagealManometry" component={EsophagealManometry} />
            <Route path="/EsophagealPH" component={EsophagealPH} />
            <Route path="/HPyloriBreathTest" component={HPyloriBreathTest} />
            <Route path="/HydrogenBreathTest" component={HydrogenBreathTest} />
            <Route path="/DrFajardo" component={DrFajardo} />
            <Route path="/DrCremonini" component={DrCremonini} />
        </Switch>
        <Footer />
        {window.innerWidth < 500 ?
        <BottomButtons />
        : null}
    </div>
    } else {
      data = 
        <div className="loadingScreen"> 
          <h2 className="loadingScreenText"> <i> Now Loading </i> </h2>
          <div className="loadingScreenLogoDiv">
            <img className="loadingScreenLogo" src={logo} />
          </div>
      
        </div>
    }
    return (
      <div>
         {data}
      </div>
    );
  }
}

export default App;
