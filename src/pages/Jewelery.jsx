import React, { useEffect, useContext } from 'react';
import Article from '@components/Articles';
import { productContext } from '../context/context';

const JewelerySection = () => {
    const products = useContext(productContext);
    const { jewelery, setJewelery } = products;

    useEffect(() => {
        const getAllProducts = async () => {
            if (!jewelery.length) {
                const response = await fetch('http://localhost:8000/headphones/category/jewelery');
                const data = await response.json();
                setJewelery(data.products);
                console.log('Pidio')
            }
        }

        getAllProducts();

    }, [])

    return (
        <div className="allproducts">
            {jewelery.map((product) => (
                <Article data={product} key={product._id} id={product?.id} />
            ))}
        </div>
    )
}

export default JewelerySection