import React, { Component } from 'react';
import TopBar from "./TopBar.js";
import Navbar from "./Navbar.js";
import FrontPage from "./FrontPage.js";
import {Route, Switch} from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Awards from "./Pages/Awards";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";


class App extends Component {
  render() {
    return (
      <div className="app">
        <TopBar />
        <Navbar />
        <Switch> 
          <Route exact path="/" component={FrontPage} /> 
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Awards" component={Awards} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Services" component={Services} />
        </Switch>
      </div>
    );
  }
}

export default App;
