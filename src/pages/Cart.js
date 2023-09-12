import React, { useContext } from "react";
import ProductContext from "./ProductContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(ProductContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((product) => (
        <div className="product" key={product._id}>
          <div className="product-image">
            <img
              src={product.image.name}
              alt={product.name}
              className="aboutImage"
            />
          </div>
          <div className="product-details">
            <div className="product-title">{product.name}</div>
            <p className="product-description">{product.description}</p>
          </div>
          <div className="product-price">
            {product.price.$numberDecimal} EUR
          </div>
          <div className="product-quantity">
            <input
              type="number"
              value={product.quantity}
              onChange={(e) =>
                handleQuantityChange(product._id, parseInt(e.target.value, 10))
              }
              min="1"
              max="5"
            />
          </div>
          <div className="product-removal">
            <button
              className="remove-product"
              onClick={() => handleRemove(product._id)}
            >
              Remove
            </button>
          </div>
          <div className="product-line-price">
            {(
              parseFloat(product.price.$numberDecimal) * product.quantity
            ).toFixed(2)}{" "}
            EUR
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
