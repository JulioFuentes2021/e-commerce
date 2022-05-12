import React, { useEffect, useContext } from 'react';
import Article from '@components/Articles';
import { productContext } from '../context/context';

const MenSection = () => {
    const products = useContext(productContext);
    const { men, setMen } = products;

    useEffect(() => {
        const getAllProducts = async () => {
            if (!men.length) {
                const response = await fetch("http://localhost:8000/headphones/category/men's clothing");
                const data = await response.json();
                setMen(data.products);
                console.log('Pidio')
            }
        }

        getAllProducts();

    }, [])

    return (
        <div className="allproducts">
            {men.map((product) => (
                <Article data={product} key={product._id} id={product?.id} />
            ))}
        </div>
    )
}

export default MenSection