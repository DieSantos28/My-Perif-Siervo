import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import CartWidget from './components/CartWidget/CartWidget';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

