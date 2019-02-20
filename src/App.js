import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/homepage'
import noMatch from './pages/noMatch'


class App extends Component {

  state = {
    isSignedIn: false,
    open: true
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={noMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
