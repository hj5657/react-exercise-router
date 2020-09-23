import React, { Component } from "react";
import "../styles/Products.css";
import { Link } from "react-router-dom";
class Products extends Component {
  render() {
    return (
      <div className="products">
        <p>All Products:</p>
        <Link to="/products/1" className="linkProducts">
          Bicycle
        </Link>
        <br />
        <Link to="/products/2" className="linkProducts">
          TV
        </Link>
        <br />
        <Link to="/products/3" className="linkProducts">
          Pencil
        </Link>
      </div>
    );
  }
}
export default Products;
