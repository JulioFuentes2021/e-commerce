import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.css';
// import App from './pages/checkout';
import App from './routes/index';
// import App from '@components/product/ProductContainer';
// import App from '@components/checkout/checkoutForm/CheckOutForm';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
