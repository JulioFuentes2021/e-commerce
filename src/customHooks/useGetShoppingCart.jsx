import React, { useState, useEffect, useContext } from 'react'
import { productContext } from '../context/context';

const useGetShoppingCart = () => {
    // const [shoppingCart, setShoppingCart] = useState();
    const context = useContext(productContext);
    const { shoppingCart, setShoppingCart } = context;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getShoppingCart = async () => {
            try {
                const token = document.cookie.split('=')[1];
                const response = await fetch('http://localhost:8000/headphones/shopping', {
                    headers: {
                        'authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setShoppingCart(data.response)

            } catch (error) {
                setError(true)
                console.log('Error paa', error)
            }
            // console.log(data)
        }

        getShoppingCart()
        setLoading(false)
    }, [])

    // const getShoppingCart = async () => {
    //     try {
    //         const token = document.cookie.split('=')[1];
    //         const response = await fetch('http://localhost:8000/headphones/shopping', {
    //             headers: {
    //                 'authorization': `Bearer ${token}`
    //             }
    //         });
    //         const data = await response.json();
    //         if (data.response.length > 3) {
    //             setShoppingCart([data.response[0], data.response[1], data.response[2],])
    //         } else {
    //             setShoppingCart(data.response)
    //         }
    //     } catch (error) {
    //         setError(true)
    //         console.log('Error paa', error)
    //     }
    //     // console.log(data)
    // }

    return [shoppingCart]
}

export default useGetShoppingCart