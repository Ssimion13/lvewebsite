import React, { Component } from 'react';
import Navbar from "./Navbar.js";
import FrontPage from "./FrontPage.js";
import {Route, Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch> 
          <Route exact path="/" component={FrontPage} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
