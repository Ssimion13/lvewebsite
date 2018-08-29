import React, { Component } from 'react';
import TopBar from "./TopBar.js";
// import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import FrontPage from "./FrontPage.js";
import {Route, Switch} from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Awards from "./Pages/Awards";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services/";
import ColonoscopyCancerScreening from "./Pages/Services/ColonoscopyCancerScreening"
import UpperEndoscopy from "./Pages/Services/UpperEndoscopy";
import GIMotilityClinic from "./Pages/Services/GIMotilityClinic/"
import CapsuleEndoscopy from "./Pages/Services/CapsuleEndoscopy"
import ViralHepatitisClinic from './Pages/Services/ViralHepatitisClinic.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopBar />
        {/* <Navbar /> */}
        <Switch> 
          <Route exact path="/" component={FrontPage} /> 
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Awards" component={Awards} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Services" component={Services} />
          <Route path="/ColonoscopyCancerScreening" component={ColonoscopyCancerScreening} />
          <Route path="/UpperEndoscopy" component={UpperEndoscopy} />
          <Route path="/CapsuleEndoscopy" component={CapsuleEndoscopy} />
          <Route path="/GIMotilityClinic" component={GIMotilityClinic} />
          <Route path="/ViralHepatitisClinic" component={ViralHepatitisClinic} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
