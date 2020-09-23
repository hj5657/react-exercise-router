import React, { Component } from "react";
import "../styles/TV.css";
class TV extends Component {
  render() {
    return (
      <div className="tv">
        <p>Product Details:</p>
        <p>Name: TV</p>
        <p>Id: 2</p>
        <p>Price: 40</p>
        <p>Desc: TV is good</p>
        <p>Url: /products/2</p>
      </div>
    );
  }
}
export default TV;
