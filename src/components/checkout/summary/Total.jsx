import React from 'react';
// import '@styles/checkout/summary/summary.css';

function Total() {
  return (
    <div className="total">
      <div className="total__box">
        <span className="total__title">TOTAL</span>
        <span className="total__money">$345</span>
      </div>
      <div className="total__box">
        <span className="total__title">SHIPPING</span>
        <span className="total__money">$345</span>
      </div>
      <div className="total__box">
        <span className="total__title">VAT (INCLUDED)</span>
        <span className="total__money">$345</span>
      </div>
      <div className="total__box total__box--margin">
        <span className="total__title">GRAND TOTAL</span>
        <span className="total__money total__money--color">$345</span>
      </div>
    </div>
  );
}

export default Total;
