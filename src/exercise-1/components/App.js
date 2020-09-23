import React, { Component } from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import MyProfile from "./MyProfile";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="title">
            <NavLink
              exact
              to="/"
              className="linkHome"
              activeClassName="selected"
            >
              Home
            </NavLink>
            <NavLink
              to="/my-profile"
              className="linkPro"
              activeClassName="selected"
            >
              My Profile
            </NavLink>
            <NavLink
              to="/about-us"
              className="linkAbout"
              activeClassName="selected"
            >
              About Us
            </NavLink>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/my-profile" component={MyProfile} />
            <Route path="/about-us" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
