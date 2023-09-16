import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../proudctpage/ProductContext";
import "./testoana.css";

function DetailPage() {
  const { selectedProduct, addToCart } = useContext(ProductContext);

  const [chestValue, setChestValue] = useState("");
  const [waistValue, setWaistValue] = useState("");
  const [hipsValue, setHipsValue] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [selectedProduct.imageURL, selectedProduct.imageURL];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="section-2">
        <div>
          <button onClick={prevImage}>Prev</button>
          <img
            id="slider"
            className="imageDiv"
            src={images[currentImageIndex]}
            alt={selectedProduct.name}
          />
          <button onClick={nextImage}>Next</button>
        </div>
        <div className="textDescription">{selectedProduct.name}</div>
        <div className="itemPrice">
          {selectedProduct.price.$numberDecimal} €
        </div>
        <div className="measurementsDivs">
          <div className="measurements">Measurements</div>
          <div className="rectangle-10">
            <label htmlFor="chest" className="chest">
              Chest
            </label>
            <input
              type="text"
              name="chest"
              value={chestValue}
              onChange={(e) => setChestValue(e.target.value)}
              required
            />
          </div>
          <div className="rectangle-11">
            <label htmlFor="waist" className="waist">
              Waist
            </label>
            <input
              type="text"
              name="waist"
              value={waistValue}
              onChange={(e) => setWaistValue(e.target.value)}
              required
            />
          </div>
          <div className="rectangle-12">
            <label htmlFor="hips" className="hips">
              Hips
            </label>
            <input
              type="text"
              name="hips"
              value={hipsValue}
              onChange={(e) => setHipsValue(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="quantity">- 1 +</div>
        <div className="line-14"></div>
        <div className="details">
          <p>{selectedProduct.description}</p>
          <button
            onClick={() => addToCart(selectedProduct)}
            className="checkout"
          >
            Add to cart
          </button>
        </div>
      </div>

      <Link to="/cart">
        <p className="checkout">View Cart</p>
      </Link>
      <Link to="/collection" className="checkout">
        Continue shopping
      </Link>
    </div>
  );
}

export default DetailPage;
