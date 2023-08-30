import React from 'react';
<<<<<<< HEAD
import { createRoot } from 'react-dom/client';
import App from './App'; // Import your main App component
import './index.css'; // Import any global CSS or styling if needed

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
=======
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
    <App />
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 9c81f86 (first)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> 40a0444ea8ce71f24091c563a5ca525028366fb3
