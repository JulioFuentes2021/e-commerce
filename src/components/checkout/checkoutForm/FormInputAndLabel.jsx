import React from 'react'
// import '@styles/checkout/checkoutForm/checkoutForm.css'

const FormInputAndLabel = ({ label, placeholder }) => {
    return (
        <div className="field">
            <label className="field__title">{label}</label>
            <input className="field__value" type="text" placeholder={placeholder} />
        </div>
    )
}

export default FormInputAndLabel