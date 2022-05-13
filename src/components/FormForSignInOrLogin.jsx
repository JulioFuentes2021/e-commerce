import React from 'react'
import Field from '../components/checkout/checkoutForm/FormInputAndLabel'

const FormForSignInOrLogin = () => {

    const handleSubmit = async () => {
        const url = 'http://localhost:8000/user/sign-up';
        const data = {
            username: 'reactuser',
            gmail: 'react@gmail.com',
            password: 'react'
        }
        try {
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)
            })
            const data2 = await response.json()
        } catch (error) {
            console.log('Ha surgido un error', error)
        }
    };

    return (
        <div className="account">
            <div className="accountFormContainer">
                <span className="accountFormContainer__title">Sign In</span>
                <form className="accountForm">
                    <Field label="Username" placeholder="JulioFuentes" />
                    <Field label="Mail" placeholder="address@gmail.com" inputType="mail" />
                    <Field label="Password" placeholder="Your password" inputType="password" />
                </form>
                <button onClick={handleSubmit} className="accountForm__send">Sign In</button>
            </div>
        </div>
    )
}

export default FormForSignInOrLogin