import React, { useState, useEffect } from 'react';

function Total({ data }) {
  let [total, setTotal] = useState(0);
  let [shipping, setShipping] = useState(0);
  let [vat, setVat] = useState(0);

  useEffect(() => {
    // setTotal(shoppingCart)

    const getTotal = async () => {
      console.log(data)

      await data.forEach(p => {
        setTotal(total += p.price * p.amount)
      })

      setShipping(total * 0.05)
      setVat(total * 0.05)
    }

    getTotal();
    console.log(data)

  }, [])


  return (
    <div className="total">
      <div className="total__box">
        <span className="total__title">TOTAL</span>
        <span className="total__money">{
          total
        }</span>
      </div>
      <div className="total__box">
        <span className="total__title">SHIPPING</span>
        <span className="total__money">{shipping}</span>
      </div>
      <div className="total__box">
        <span className="total__title">VAT (INCLUDED)</span>
        <span className="total__money">{vat}</span>
      </div>
      <div className="total__box total__box--margin">
        <span className="total__title">GRAND TOTAL</span>
        <span className="total__money total__money--color">{total + shipping + vat}</span>
      </div>
    </div>
  );
}

export default Total;
