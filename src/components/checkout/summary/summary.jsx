import React from 'react';
import SummaryItems from './SummaryItems';
import Total from './Total';
import '../../styles/css/checkout/summary/summary.css';

const summary = () => (
  <div className="summary">
    <SummaryItems />
    <SummaryItems />
    <SummaryItems />
    <Total />
  </div>
);

export default summary;
