/* eslint-disable import/no-unresolved */
import React from 'react';
import SummaryItems from './SummaryItems';
import Total from './Total';
// import '@styles/checkout/summary/summary.css';

const summary = () => (
  <div className="summary">
    <SummaryItems />
    <SummaryItems />
    <SummaryItems />
    <Total />
    <button className="summary__btn" type="button">Continue & pay</button>
  </div>
);

export default summary;
