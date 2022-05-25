import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.css';
import { Context } from './context/context';
// import App from './pages/checkout';
import App from './routes/index';
// import App from '@components/shoppingCart';
// import App from '@components/checkout/checkoutForm/CheckOutForm';


ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('root'),
);
