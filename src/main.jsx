import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Updated to import the .jsx file
import './App.css';         // Imports your professional stylesheet

// This finds the 'root' div in your public/index.html file
const root = ReactDOM.createRoot(document.getElementById('root'));

// This renders your entire React application into that div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
