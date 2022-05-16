import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState();
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`http://localhost:8000/headphones/${params.id}`)
            const data = await response.json()
            console.log(data)
            setProduct(data.products)
        };

        getProduct()
    }, [])

    const getProduct = async () => {
        console.log('Se ejecuto')
        try {
            const response = await fetch(`http://localhost:8000/user/add`, {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    gmail: 'cart@gmail.com',
                    name: product.name,
                    image: product.image,
                    amount: amount,
                    price: product.price
                })

            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="view">
            <div className="viewImage">
                <img src={product?.image} alt="" className="viewImage__item" />
            </div>
            <div className="viewDescription">
                <span className="viewDescription__tag">NEW PRODUCT</span>
                <span className="viewDescription__name">{product?.name}</span>
                <p className="viewDescription__info">{product?.description}</p>
                <span className="viewDescription__price">{product?.price}</span>
                <div className="cart">
                    <div className="productsAmount">
                        <button disabled={amount === 1 ? true : false} onClick={() => setAmount(amount - 1)} className="productsAmount__operation">-</button>
                        <span className="productsAmount__value">{amount}</span>
                        <button onClick={() => setAmount(amount + 1)} className="productsAmount__operation">+</button>
                    </div>
                    <button onClick={getProduct} className="cart__button">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Product