import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Field from '../components/checkout/checkoutForm/FormInputAndLabel';
import { Link } from 'react-router-dom';
import useSessions from '../customHooks/useSessions';

const FormForSignInOrLogin = () => {

    let navigate = useNavigate();
    const email = useRef()
    const password = useRef()
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = 'http://localhost:8000/user/login';
        const data = {
            username: email.current.value,
            password: password.current.value
        }
        try {
            const req = await fetch(url, {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(data)
            })
            const res = await req.json()
            navigate(-1)
        } catch (error) {
            console.log('Ha surgido un error', error)
            setError(true)
        }
    };

    return (
        <div className="account">
            <div className="accountFormContainer">
                <span className="accountFormContainer__title">Login</span>
                {error && <span className="error">Email or password incorrect.</span>}
                <form onSubmit={handleSubmit} className="accountFormInputs">
                    <div className="accountForm">
                        <Field refHook={email} label="Mail" placeholder="address@gmail.com" inputType="email" />
                        <Field refHook={password} label="Password" placeholder="Your password" inputType="password" />
                    </div>
                    <span className="accountFormInputs__register">Don't You have an account yet? <Link to='/form' className="accountFormInputs__register--color">Register</Link></span>
                    <button type="submit" className="accountForm__send">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default FormForSignInOrLogin