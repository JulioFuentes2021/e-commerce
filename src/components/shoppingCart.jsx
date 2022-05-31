import React, { useState, useEffect } from 'react'
import AddOrRemove from '@components/AddOrRemove'
import { Link } from 'react-router-dom'
import useGetShoppingCart from '../customHooks/useGetShoppingCart'

const shoppingCart = ({ cart }) => {

    // const [shoppingCart, loading, error] = useGetShoppingCart();
    const [shoppingCart, setShoppingCart] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [updateCart, setUpdateCart] = useState(false);

    useEffect(() => {
        if (cart) {
            const getShoppingCart = async () => {
                setLoading(true)
                try {
                    const resToken = await fetch('http://localhost:8000/user/refresh', {
                        credentials: "include"
                    })
                    const { token } = await resToken.json()

                    const response = await fetch('http://localhost:8000/headphones/shopping', {
                        headers: {
                            'authorization': `Bearer ${token}`
                        }
                    });
                    const data = await response.json();
                    console.log(data.cartLength)
                    if (data.cartLength > 3) {
                        setShoppingCart([data.response.shoppingCart[0], data.response.shoppingCart[1], data.response.shoppingCart[2],])
                    } else {
                        setShoppingCart(data.response.shoppingCart)
                    }
                } catch (error) {
                    setError(true)
                    console.log('Error paa', error)
                }
                setLoading(false)
            }
            console.log('cart')
            getShoppingCart()
        }
    }, [cart])

    return (
        <div className="shoppingCart">
            {loading ? 'Loading' : error ? "Uups! Something went wrong" : <>
                <section className="shoppingCart__header">
                    <span>Cart(3)</span>
                    <span>Delete All</span>
                </section>
                {shoppingCart.map((p) => (
                    <div className="shoppingCart__products">
                        <div className="imageCart">
                            <img className="imageCart__item" src={p.image} alt="Name" />
                            <div className="cartDescription">
                                <div className="cartDescription__container">
                                    {/* <span className="cartDescription__name">{p.name}</span> */}
                                    <span className="cartDescription__price">{p.price}</span>
                                </div>
                            </div>
                        </div>
                        <AddOrRemove />
                    </div>
                ))}
                {/* <section className="cartTotal">
                    <span className="cartTotal__title">
                        Total
                    </span>
                    <span className="cartTotal__amount">
                        $5.345
                    </span>
                </section> */}
                <span>You can see all the details and products <br /> pressing the checkout button.</span>
                <Link to="checkout" className="cartLink">
                    <button className="cartLink__button">Checkout</button>
                </Link>

            </>}
        </div>
    )
}

export default shoppingCart