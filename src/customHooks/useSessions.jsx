import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const useSessions = (url, data) => {
    const [error, setError] = useState(false);

    // const data = {
    //     username: email.current.value,
    //     password: password.current.value
    // }
    let navigate = useNavigate();

    const session = async (e) => {
        e.preventDefault();

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
    }
    // console.log(form.current.value)
    // console.log(document.cookie.split('=')['token']

    return [error, session]
}

export default useSessions