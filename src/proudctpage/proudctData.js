import React, { useContext } from 'react';
import ProductContext from './ProductContext';
import './proudctData.css'

function ProductDetail() {
    const { selectedProduct } = useContext(ProductContext);

    if (!selectedProduct) return <div>No product selected</div>;

    return (
        <div>
            <img className= 'img-dit'  src={selectedProduct.urls.full} />
            {/* ... display other details ... */}
        </div>
    );
}

export default ProductDetail;
