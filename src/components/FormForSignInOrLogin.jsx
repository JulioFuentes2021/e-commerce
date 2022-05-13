import React, { useRef } from 'react'
import Field from '../components/checkout/checkoutForm/FormInputAndLabel'

const FormForSignInOrLogin = () => {

    const username = useRef()
    const email = useRef()
    const password = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = 'http://localhost:8000/user/sign-up';
        const data = {
            username: username.current.value,
            gmail: email.current.value,
            password: password.current.value
        }
        try {
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(data)
            })
        } catch (error) {
            console.log('Ha surgido un error', error)
        }
        // console.log(form.current.value)
    };

    return (
        <div className="account">
            <div className="accountFormContainer">
                <span className="accountFormContainer__title">Sign In</span>
                <form onSubmit={handleSubmit} className="accountFormInputs">
                    <div className="accountForm">
                        <Field refHook={username} label="Username" placeholder="JulioFuentes" />
                        <Field refHook={email} label="Mail" placeholder="address@gmail.com" inputType="email" />
                        <Field refHook={password} label="Password" placeholder="Your password" inputType="password" />
                    </div>
                    <button type="submit" className="accountForm__send">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default FormForSignInOrLogin