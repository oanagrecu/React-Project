// import { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import ProductContext from "./ProductContext";

import React from "react";
import "./product.css"; // Make sure the CSS file path is correct

function detailPage({product}) {
  return (
    <div>
      <div className="card" id="detailsCard">
        <div className="card__body">
          <div className="half">
            <div className="featured_text">
              <h3>Ash Mademoiselle</h3>
              <p className="sub">{product.name}</p>
              <p className="product-price">{product.price.$numberDecimal} EUR</p>
            </div>
            <div className="image">
              <img src={product.image} alt="product" />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <p className="card-text">{product.description}</p>
            </div>
            <div className="card__footer">
              <div className="action">
                <button
                  id={product.id}
                  className="bag-btn btn-primary stretched-link addToCart"
                  type="button"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default detailPage;
