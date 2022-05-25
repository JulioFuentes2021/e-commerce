/* eslint-disable import/no-unresolved */
import React from 'react';
import SummaryItems from './SummaryItems';
import Total from './Total';
import useGetShoppingCart from '../../../customHooks/useGetShoppingCart';


const summary = () => {
  const [shoppingCart] = useGetShoppingCart();
  let total = 0;

  return (
    <div className="summary">
      {shoppingCart.map((p) => (
        <SummaryItems key={p.name} price={p.price} image={p.image} name={p.name} amount={p.amount} />
      ))}
      <Total data={shoppingCart} />
      <button className="summary__btn" type="button">Continue & pay</button>
    </div>
  )
};

export default summary;
