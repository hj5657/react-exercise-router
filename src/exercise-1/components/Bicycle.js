import React, { Component } from "react";
import "../styles/Bicycle.css";
class Bicycle extends Component {
  render() {
    return (
      <div className="bicycle">
        <p>Product Details:</p>
        <p>Name: Bicycle</p>
        <p>Id: 1</p>
        <p>Price: 30</p>
        <p>Desc: Bicycle is good</p>
        <p>Url: /products/1</p>
      </div>
    );
  }
}
export default Bicycle;
