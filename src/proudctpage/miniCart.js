import React, { useState,useContext, } from 'react';
import ProductContext from './ProductContext';



function Minin(product) {

    const [selectedProduct, setSelectedProduct] = useState(() => {
      try {
          const savedProduct = localStorage.getItem('selectedProduct');
          return savedProduct ? JSON.parse(savedProduct) : null;
      } catch (error) {
          console.error("Error parsing selectedProduct from local storage", error);
          return null;
      }
    });

  return <div>{localStorage.getItem('cart')}</div>
}

export default Minin;
