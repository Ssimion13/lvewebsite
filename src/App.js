import React, { Component } from 'react';
import TopBar from "./TopBar.js";
import FrontPage from "./FrontPage.js";
import {Route, Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="app">
        <TopBar />
        <Switch> 
          <Route exact path="/" component={FrontPage} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
