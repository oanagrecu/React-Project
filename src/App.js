import React, { useState, useEffect } from 'react';
import Navbar from './common/navbar.js';
import Midpart from './homepage/midpart.js';
import Loader from './homepage/loader';
import Show from './homepage/show.js'
import Change from './homepage/imgchange.js'
import Footer from './common/footer.js'
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
    <div className="App">
      <Navbar />
      <Midpart />
      <Show />
      <Footer / >
    </div>
  );
}
export default App
