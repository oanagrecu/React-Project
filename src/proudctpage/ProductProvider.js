// ProductProvider.js
import React, { useState } from 'react';
import ProductContext from './ProductContext';

const ProductProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
