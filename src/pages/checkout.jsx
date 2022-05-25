import React from 'react'
import CheckOutForm from '@components/checkout/checkoutForm/CheckOutForm'
import Summary from '@components/checkout/summary/summary'

const checkout = () => {
    return (
        <div className="buyContainer">
            <div className="buyPage">
                <div className="buyPage__checkout">
                    <CheckOutForm />
                </div>
                <div className="buyPage__summary">
                    <Summary />
                </div>
            </div>
        </div>
    )
}

export default checkout