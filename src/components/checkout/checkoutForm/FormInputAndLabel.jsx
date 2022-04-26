import React from 'react'

const FormInputAndLabel = ({ label, placeholder }) => {
    return (
        <div className="field">
            <label className="field__title">{label}</label>
            <input className="field__value" type="text" placeholder={placeholder} />
        </div>
    )
}

export default FormInputAndLabel