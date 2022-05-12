import React from 'react'
import Field from '../components/checkout/checkoutForm/FormInputAndLabel'

const FormForSignInOrLogin = () => {
    return (
        <div className="account">
            <div className="accountFormContainer">
                <span className="accountFormContainer__title">Sign In</span>
                <form className="accountForm">
                    <Field label="Username" placeholder="JulioFuentes" />
                    <Field label="Mail" placeholder="address@gmail.com" inputType="mail" />
                    <Field label="Password" placeholder="Your password" inputType="password" />
                </form>
                <button className="accountForm__send">Sign In</button>
            </div>
        </div>
    )
}

export default FormForSignInOrLogin