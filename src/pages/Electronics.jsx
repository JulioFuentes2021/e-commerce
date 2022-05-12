import React, { useEffect, useContext } from 'react';
import Article from '@components/Articles';
import { productContext } from '../context/context';

const AllProducts = () => {
    const products = useContext(productContext);
    const { electronics, setElectronics } = products;

    useEffect(() => {
        const getAllProducts = async () => {
            if (!electronics.length) {
                const response = await fetch('http://localhost:8000/headphones/category/electronics');
                const data = await response.json();
                setElectronics(data.products);
                console.log('Pidio')
            }
        }

        getAllProducts();

    }, [])

    return (
        <div className="allproducts">
            {electronics.map((product) => (
                <Article data={product} key={product._id} id={product?.id} />
            ))}
        </div>
    )
}

export default AllProducts