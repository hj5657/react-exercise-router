import React, { Component } from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";
class About extends Component {
  render() {
    return (
      <div className="about">
        <p>Company: ThoughtWorks Local</p>
        <p>Location: Cheng du</p>
        <br />
        <p>For more information,please</p>
        <p>
          view our <Link to="/">website</Link>
        </p>
      </div>
    );
  }
}
export default About;
