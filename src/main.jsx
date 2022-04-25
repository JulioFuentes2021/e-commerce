import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/checkout';
import App from './routes/index';
// import App from '@components/checkout/summary/summary';
// import App from '@components/checkout/checkoutForm/CheckOutForm';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
