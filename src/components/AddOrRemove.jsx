import React, { useState } from 'react'

const AddOrRemove = () => {
    const [amount, setAmount] = useState(1);

    return (
        <div className="productsAmount">
            <button disabled={amount === 1 ? true : false} onClick={() => setAmount(amount - 1)} className="productsAmount__operation">-</button>
            <span className="productsAmount__value">{amount}</span>
            <button onClick={() => setAmount(amount + 1)} className="productsAmount__operation">+</button>
        </div>
    )
}

export default AddOrRemove