import React from 'react'

const FormInputAndLabel = ({ label, placeholder, inputType }) => {
    return (
        <div className="field">
            <label className="field__title">{label}</label>
            <input className="field__value" type={inputType || "text"} placeholder={placeholder} />
        </div>
    )
}

export default FormInputAndLabel