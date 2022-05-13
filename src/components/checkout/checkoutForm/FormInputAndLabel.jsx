import React from 'react'

const FormInputAndLabel = ({ label, placeholder, inputType, refHook }) => {
    return (
        <div className="field">
            <label className="field__title">{label}</label>
            <input ref={refHook} className="field__value" type={inputType || "text"} placeholder={placeholder} required />
        </div>
    )
}

export default FormInputAndLabel