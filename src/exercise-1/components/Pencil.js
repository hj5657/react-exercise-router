import React, { Component } from "react";
import "../styles/Pencil.css";
class Pencil extends Component {
  render() {
    return (
      <div className="pencil">
        <p>Product Details:</p>
        <p>Name: Pencil</p>
        <p>Id: 3</p>
        <p>Price: 50</p>
        <p>Desc: Pencil is good</p>
        <p>Url: /products/3</p>
      </div>
    );
  }
}
export default Pencil;
