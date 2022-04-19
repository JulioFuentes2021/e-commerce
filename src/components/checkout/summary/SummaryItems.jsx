import React from 'react';
// import '../../styles/css/checkout/summary/summary.css';

function SummaryItems() {
  return (
    <div className="item">
      <div className="image">
        <img className="image__item" src="https://imgs.search.brave.com/7davBatiXOxm40FQmIfRxeAeA9xZ4lfYJidsGkbjX8Q/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/bmdhbGwuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy80L0hlYWRw/aG9uZS1UcmFuc3Bh/cmVudC1GaWxlLnBu/Zw" alt="Headphone" />
      </div>
      <div className="item__totalBox">
        <div className="item__moneyBox">
          <span className="item__name">Name</span>
          <span className="item__price">Price</span>
        </div>
        <div className="item__amount">
          x1
        </div>
      </div>
    </div>
  );
}

export default SummaryItems;
