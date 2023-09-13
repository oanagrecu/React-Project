import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../proudctpage/ProductContext";
import "./testoana.css";

function DetailPage() {
  const { selectedProduct, addToCart } = useContext(ProductContext);

  return (
    <div>
      <div className="section-2">
        <img
          className="imageDiv"
          src={selectedProduct.imageURL}
          alt={selectedProduct.name}
        />
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
              value=""
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
              value=""
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
              value=""
              required
            />
          </div>
        </div>
        <div className="quantity">- 1 +</div>
        <div className="line-14"></div>
        <div className="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          blandit turpis cursus in. Justo donec enim diam vulputate. Rutrum
          quisque non tellus orci ac auctor augue mauris. Mus mauris vitae
          ultricies leo integer malesuada. Molestie ac feugiat sed lectus
          vestibulum mattis ullamcorper velit. Orci nulla pellentesque dignissim
          enim sit amet venenatis urna. Ullamcorper morbi tincidunt ornare massa
          eget egestas. Duis at consectetur lorem donec massa sapien faucibus
          et. Scelerisque eu ultrices vitae auctor eu augue ut.
        </div>
      </div>
      <button onClick={() => addToCart(selectedProduct)}>Add to cart</button>
      <Link to="/cart">
        <p>View Cart</p>
      </Link>
    </div>
  );
}

export default DetailPage;
