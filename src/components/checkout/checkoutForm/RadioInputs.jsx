import React from 'react'

const RadioInputs = ({ setRadioInput, name, change, isItDefaultChecked }) => {
    return (
        <>
            <label className="paymentMethod__label">
                <input onClick={() => setRadioInput(change)} className="paymentMethod__input" type="radio" name="fav_language" value="HTML" defaultChecked={isItDefaultChecked && 'defaultChecked'} />
                <span className="paymentMethod__checkmark"></span>
            </label>
            <span>{name}</span>
        </>
    )
}

export default RadioInputs