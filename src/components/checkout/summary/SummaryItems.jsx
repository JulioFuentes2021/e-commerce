import React from 'react';

function SummaryItems({ image, name, amount, price }) {
  return (
    <div className="item">
      <div className="image">
        <img className="image__item" src={image} alt={name} />
      </div>
      <div className="item__totalBox">
        <div className="item__moneyBox">
          {/* <span className="item__name">{name}</span> */}
          <span className="item__price">{price}</span>
        </div>
        <div className="item__amount">
          x{amount}
        </div>
      </div>
    </div>
  );
}

export default SummaryItems;
