<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './common/navbar.js';
import Midpart from './homepage/midpart.js';
import Loader from './homepage/loader';
import Show from './homepage/show.js'
import Change from './homepage/imgchange.js'
import Footer from './common/footer.js'
import Proudct from './proudctpage/product.js'
import ProductProvider from './proudctpage/ProductProvider.js';

import ProductDetail from './proudctpage/proudctData.js'
import './App.css';
import './common/navbar.css';
import './common/footer.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async task, e.g., data fetching
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loader after 3 seconds
    }, 3000);
    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, []);

  if (isLoading) {
    return <Loader />;
  }

 return (
    <ProductProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Midpart />
              <Show />
              <Footer />
            </>
          } />
          <Route path="/Collection" element={<Proudct />} />
         <Route path="/Collection/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
      </ProductProvider>
>>>>>>> 40a0444ea8ce71f24091c563a5ca525028366fb3
  );
}

export default App;
<<<<<<< HEAD
=======
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 9c81f86 (first)
>>>>>>> 40a0444ea8ce71f24091c563a5ca525028366fb3
