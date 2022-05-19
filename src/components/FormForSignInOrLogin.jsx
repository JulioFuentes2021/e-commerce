import React, { useRef, useState } from 'react'
import Field from '../components/checkout/checkoutForm/FormInputAndLabel'
import { useNavigate } from 'react-router-dom'

const FormForSignInOrLogin = () => {

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = 'http://localhost:8000/user/sign-up';
        const data = {
            username: username.current.value,
            gmail: email.current.value,
            password: password.current.value
        }
        try {
            await fetch(url, {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(data)
            })

            navigate('/login')
        } catch (error) {
            console.log('Ha surgido un error', error)
            setError(true)
        }
        // console.log(form.current.value)
    };

    return (
        <div className="account">
            <div className="accountFormContainer">
                <span className="accountFormContainer__title">Sign In</span>
                {error && <span className="error">Email or password incorrect.</span>}
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