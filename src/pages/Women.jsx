import React, { useEffect, useContext } from 'react';
import Article from '@components/Articles';
import { productContext } from '../context/context';

const WomenSection = () => {
    const products = useContext(productContext);
    const { women, setWomen } = products;

    useEffect(() => {
        const getAllProducts = async () => {
            if (!women.length) {
                const response = await fetch("http://localhost:8000/headphones/category/women's clothing");
                const data = await response.json();
                setWomen(data.products);
                console.log('Pidio')
            }
        }

        getAllProducts();

    }, [])

    return (
        <div className="allproducts">
            {women.map((product) => (
                <Article data={product} key={product._id} id={product?.id} />
            ))}
        </div>
    )
}

export default WomenSection