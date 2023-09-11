import React, { useState, useEffect } from 'react';
import ProductContext from './ProductContext';

const ProductProvider = ({ children }) => {
    // Initialization of selectedProduct from localStorage
    const [selectedProduct, setSelectedProduct] = useState(() => {
      try {
          const savedProduct = localStorage.getItem('selectedProduct');
          // If there's a savedProduct, attempt to parse it from JSON, otherwise return null
          return savedProduct ? JSON.parse(savedProduct) : null;
      } catch (error) {
          // If there's an error (e.g., malformed JSON), log it and return null
          console.error("Error parsing selectedProduct from local storage", error);
          return null;
      }
    });

    // Initialization of cart from localStorage
    const [cart, setCart] = useState(() => {
      try {
          const savedCart = localStorage.getItem('cart');
          // If there's a savedCart, attempt to parse it from JSON, otherwise return an empty array
          return savedCart ? JSON.parse(savedCart) : [];
      } catch (error) {
          // If there's an error (e.g., malformed JSON), log it and return an empty array
          console.error("Error parsing cart from local storage", error);
          return [];
      }
    });

    useEffect(() => {
        // Save selectedProduct to localStorage if it exists
        if (selectedProduct) {
            localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
        }
        // Always save the cart to localStorage when there's a change in cart or selectedProduct
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart, selectedProduct]); // Included selectedProduct in the dependency array to ensure localStorage updates

    const addToCart = (product) => {
        // When adding to cart, check if prevCart is an array before spreading it
        setCart(prevCart => Array.isArray(prevCart) ? [...prevCart, product] : [product]);
        console.log('the products are :', product.reference);
    };

    return (
        <ProductContext.Provider 
            value={{ 
                selectedProduct, 
                setSelectedProduct,
                cart,
                addToCart 
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
