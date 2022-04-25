import React from 'react'
import CheckOutForm from '@components/checkout/checkoutForm/CheckOutForm'
import Summary from '@components/checkout/summary/summary'
import Layout from '@components/Layout/'
import '@styles/pages/checkout.css'

const checkout = () => {
    return (
        <Layout>
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
        </Layout>
    )
}

export default checkout