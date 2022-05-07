import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            const data = await response.json()
            console.log(data)
            setProduct(data)
        };

        getProduct()
    }, [])

    return (
        <div className="view">
            <div className="viewImage">
                <img src={product?.image} alt="" className="viewImage__item" />
            </div>
            <div className="viewDescription">
                <span className="viewDescription__tag">NEW PRODUCT</span>
                <span className="viewDescription__name">{product?.title}</span>
                <p className="viewDescription__info">{product?.description}</p>
                <span className="viewDescription__price">{product?.price}</span>
                <div className="cart">
                    <div className="productsAmount">
                        <button className="productsAmount__operation">-</button>
                        <span className="productsAmount__value">1</span>
                        <button className="productsAmount__operation">+</button>
                    </div>
                    <button className="cart__button">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Product