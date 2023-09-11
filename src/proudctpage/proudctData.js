import React, { useContext } from 'react';
import ProductContext from './ProductContext';
import './proudctData.css'

function ProductDetail() {
    const { selectedProduct, addToCart } = useContext(ProductContext);

    if (!selectedProduct) return <div>No product selected</div>;

    return (
        <div>
            <img className= 'img-dit'  src={selectedProduct.image} />
            <p>{selectedProduct.name}</p>
            <button onClick={() => addToCart(selectedProduct)}>
                Add to cart
            </button>        
        </div>
    );
}
export default ProductDetail;
