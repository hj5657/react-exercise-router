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
import Products from "./Products";
import Bicycle from "./Bicycle";
import TV from "./TV";
import Pencil from "./Pencil";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="title">
            <NavLink exact to="/" className="normal" activeClassName="selected">
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="normal"
              activeClassName="selected"
            >
              Products
            </NavLink>
            <NavLink
              to="/my-profile"
              className="normal"
              activeClassName="selected"
            >
              My Profile
            </NavLink>
            <NavLink
              to="/about-us"
              className="normal"
              activeClassName="selected"
            >
              About Us
            </NavLink>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/my-profile" component={MyProfile} />
            <Route path="/about-us" component={About} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/1" component={Bicycle} />
            <Route path="/products/2" component={TV} />
            <Route path="/products/3" component={Pencil} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
