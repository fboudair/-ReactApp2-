import React from 'react'; // Import React core library
import ReactDOM from 'react-dom/client'; // Import ReactDOM to render the app to the DOM
import App from './App'; // Import ReactDOM to render the app to the DOM
import './index.css'; // Import global CSS styles
// Create a root for React 18+ and render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
    // StrictMode helps highlight potential problems in development
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
