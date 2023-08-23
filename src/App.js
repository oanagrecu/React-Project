import React, { useState, useEffect } from 'react';
import Navbar from './navbar.js';
import Midpart from './midpart.js';
import Loader from './loader';
import './App.css';

import './navbar.css';

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
    <div className="App">
      <Navbar />
      <Midpart />
    </div>
  );
}

export default App
